import { Module } from '@nestjs/common';

import { ExchangeOfficeResolver } from './exchange-office.resolver';
import { ExchangeOfficeService } from './exchange-office.service';

@Module({
  providers: [ExchangeOfficeResolver, ExchangeOfficeService],
})
export class ExchangeOfficeModule {}
