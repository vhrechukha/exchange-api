import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ExchangeOffice } from './exchange-office.entity';
import { ExchangeOfficeResolver } from './exchange-office.resolver';
import { ExchangeOfficeService } from './exchange-office.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExchangeOffice])],

  providers: [ExchangeOfficeResolver, ExchangeOfficeService],
})
export class ExchangeOfficeModule {}
