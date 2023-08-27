import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Country } from '../../country/country.entity';
import { countryServiceProvider } from '../../country/test/country.service-provider';
import { countryMock } from '../../country/test/mocks';
import { Exchange } from '../../exchange/exchange.entity';
import { ExchangeService } from '../../exchange/exchange.service';
import { exchangeMock } from '../../exchange/test/mocks';
import { Rate } from '../../rate/rate.entity';
import { RateService } from '../../rate/rate.service';
import { rateMock } from '../../rate/test/mocks';
import { ExchangeOffice } from '../exchange-office.entity';
import { ExchangeOfficeService } from '../exchange-office.service';
import { exchangeOfficeMock, importExchangeDataMock } from './mocks';

describe('ExchangeOfficeService', () => {
  let exchangeOfficeService: ExchangeOfficeService;
  let exchangeOfficeRepository: Repository<ExchangeOffice>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        countryServiceProvider,
        ExchangeOfficeService,
        ConfigService,
        RateService,
        ExchangeService,
        // CountryService,
        {
          provide: getRepositoryToken(ExchangeOffice),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(Exchange),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(Rate),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(Country),
          useClass: Repository,
        },
        // You may need to mock your other services as well
      ],
    }).compile();

    exchangeOfficeService = module.get<ExchangeOfficeService>(
      ExchangeOfficeService,
    );
    exchangeOfficeRepository = module.get<Repository<ExchangeOffice>>(
      getRepositoryToken(ExchangeOffice),
    );
  });

  describe('importExchangeOfficesAndCountries', () => {
    it('should import exchange offices and countries', async () => {
      const parsedData = {
        countries: [countryMock],
        'exchange-offices': [exchangeOfficeMock],
      };

      jest
        .spyOn(exchangeOfficeService, 'parseIndentedStructure')
        .mockReturnValue(parsedData);
      jest
        .spyOn(exchangeOfficeService['countryService'], 'create')
        .mockResolvedValue(countryMock);
      jest
        .spyOn(exchangeOfficeService, 'create')
        .mockResolvedValue(exchangeOfficeMock);
      jest
        .spyOn(exchangeOfficeService['exchangeService'], 'create')
        .mockResolvedValue(exchangeMock);
      jest
        .spyOn(exchangeOfficeService['rateService'], 'create')
        .mockResolvedValue(rateMock);

      await exchangeOfficeService.importExchangeOfficesAndCountries(
        importExchangeDataMock,
      );

      expect(
        exchangeOfficeService['countryService']['create'],
      ).toHaveBeenCalledTimes(parsedData.countries.length);
      expect(exchangeOfficeService.create).toHaveBeenCalledTimes(
        parsedData['exchange-offices'].length,
      );
      expect(
        exchangeOfficeService['exchangeService']['create'],
      ).toHaveBeenCalledTimes(1);
      expect(
        exchangeOfficeService['rateService']['create'],
      ).toHaveBeenCalledTimes(1);
    });
  });
});
