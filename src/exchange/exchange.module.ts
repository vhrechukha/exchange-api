import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Exchange } from './exchange.entity';
import { ExchangeResolver } from './exchange.resolver';
import { ExchangeService } from './exchange.service';

@Module({
  imports: [TypeOrmModule.forFeature([Exchange])],
  providers: [ExchangeResolver, ExchangeService],
})
export class ExchangeModule {}
