import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { BaseService } from '../common/base/base.service';
import { CountryService } from '../country/country.service';
import { ExchangeService } from '../exchange/exchange.service';
import { RateService } from '../rate/rate.service';
import { TopExchangersByCountryDto } from './dto/top-chargers-by-country.dto';
import { ExchangeOffice } from './exchange-office.entity';
import topExchangersByCountryQuery from './query/top-3-profit-currencies';

@Injectable()
export class ExchangeOfficeService extends BaseService<ExchangeOffice> {
  constructor(
    @InjectRepository(ExchangeOffice)
    private readonly exchangeOfficeRepository: Repository<ExchangeOffice>,
    private readonly configService: ConfigService,
    private readonly rateService: RateService,
    private readonly exchangeService: ExchangeService,
    private readonly countryService: CountryService,
    @InjectDataSource() private dataSource: DataSource,
  ) {
    super(ExchangeOffice, exchangeOfficeRepository);
  }

  async getTopExchangersByCountry(): Promise<TopExchangersByCountryDto[]> {
    // TODO: rewrite to typeorm Query Builder
    const results = await this.dataSource.query(topExchangersByCountryQuery);

    return results.map((result) => ({
      countryRank: result.country_rank,
      countryName: result.country_name,
      exchangerName: result.exchanger_name,
      totalProfit: result.total_profit,
    }));
  }

  parseIndentedStructure(input): any {
    const lines = input.trim().split('\n');

    const stack = [[0, {}]];
    const root: any = stack[0][1];

    lines.forEach((line) => {
      const level = line.search(/\S/); // Find the first non-space character
      const text = line.trim();

      // Pop the stack to find the parent object at the current level
      while (stack.length > 1 && stack[stack.length - 1][0] >= level) {
        stack.pop();
      }

      const parentObject = stack[stack.length - 1][1];

      if (text.includes('=')) {
        const [key, value] = text.split('=').map((str) => str.trim());
        parentObject[key] = value;
      } else {
        const newObj = {};

        if (
          ['exchange-offices', 'exchanges', 'rates', 'countries'].includes(text)
        ) {
          parentObject[text] = [];
          stack.push([level, parentObject[text]]);
        } else {
          if (Array.isArray(parentObject)) {
            parentObject.push(newObj);
            stack.push([level, newObj]);
          } else {
            parentObject[text] = newObj;
            stack.push([level, newObj]);
          }
        }
      }
    });

    return root;
  }

  async importExchangeOfficesAndCountries(data: string): Promise<void> {
    const parsedData: any = this.parseIndentedStructure(data);

    for (const country of parsedData.countries) {
      await this.countryService.create(country);
    }

    for (const exchangeOffice of parsedData['exchange-offices']) {
      exchangeOffice.country = await this.countryService.findByCode(
        exchangeOffice.country,
      );
      const createdExchangeOffice = await this.create(exchangeOffice);

      if (exchangeOffice?.exchanges?.length) {
        for (const exchange of exchangeOffice.exchanges) {
          exchange.exchangeOffice = createdExchangeOffice;

          await this.exchangeService.create(exchange);
        }
      }
      if (exchangeOffice?.rates?.length) {
        for (const rate of exchangeOffice.rates) {
          rate.exchangeOffice = createdExchangeOffice;
          await this.rateService.create(rate);
        }
      }
    }
  }
}
