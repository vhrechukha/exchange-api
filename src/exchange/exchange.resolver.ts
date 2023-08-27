import { Resolver } from '@nestjs/graphql';

import { BaseResolver } from '../common/base/base.resolver';
import { CreateExchangeDto } from './dto/create-exchange.dto';
import { UpdateExchangeDto } from './dto/update-exchange.dto';
import { Exchange } from './exchange.entity';
import { ExchangeService } from './exchange.service';

@Resolver(() => Exchange)
export class ExchangeResolver extends BaseResolver(
  Exchange,
  CreateExchangeDto,
  UpdateExchangeDto,
  ExchangeService,
) {
  constructor(private readonly exchangeService: ExchangeService) {
    super(exchangeService);
  }
}
