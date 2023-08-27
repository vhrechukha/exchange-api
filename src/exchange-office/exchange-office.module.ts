import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Country } from '../country/country.entity';
import { CountryModule } from '../country/country.module';
import { CountryService } from '../country/country.service';
import { Exchange } from '../exchange/exchange.entity';
import { ExchangeModule } from '../exchange/exchange.module';
import { ExchangeResolver } from '../exchange/exchange.resolver';
import { ExchangeService } from '../exchange/exchange.service';
import { Rate } from '../rate/rate.entity';
import { RateService } from '../rate/rate.service';
import { ExchangeOffice } from './exchange-office.entity';
import { ExchangeOfficeResolver } from './exchange-office.resolver';
import { ExchangeOfficeService } from './exchange-office.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ExchangeOffice, Rate, Exchange, Country]),
  ],
  providers: [
    ExchangeOfficeResolver,
    ExchangeOfficeService,
    RateService,
    ExchangeService,
    CountryService,
  ],
})
export class ExchangeOfficeModule {}
