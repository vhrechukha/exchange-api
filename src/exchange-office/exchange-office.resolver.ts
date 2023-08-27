import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { BaseResolver } from '../common/base/base.resolver';
import { CreateExchangeOfficeDto } from './dto/create-exchange-office.dto';
import { UpdateExchangeOfficeDto } from './dto/update-exchange-office.dto';
import { ExchangeOffice } from './exchange-office.entity';
import { ExchangeOfficeService } from './exchange-office.service';

@Resolver(() => ExchangeOffice)
export class ExchangeOfficeResolver extends BaseResolver(
  ExchangeOffice,
  CreateExchangeOfficeDto,
  UpdateExchangeOfficeDto,
  ExchangeOfficeService,
) {
  constructor(private readonly exchangeOfficeService: ExchangeOfficeService) {
    super(exchangeOfficeService);
  }

  @Mutation(() => Boolean)
  async importExchangeOfficeData(@Args('data') data: string): Promise<boolean> {
    try {
      await this.exchangeOfficeService.importExchangeOfficesAndCountries(data);
      return true;
    } catch (error) {
      return false;
    }
  }
}
