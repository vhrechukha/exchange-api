import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CreateExchangeOfficeInput } from './dto/create-exchange-office.input';
import { UpdateExchangeOfficeInput } from './dto/update-exchange-office.input';
import { ExchangeOffice } from './entities/exchange-office.entity';
import { ExchangeOfficeService } from './exchange-office.service';

@Resolver(() => ExchangeOffice)
export class ExchangeOfficeResolver {
  constructor(private readonly exchangeOfficeService: ExchangeOfficeService) {}

  @Mutation(() => ExchangeOffice)
  createExchangeOffice(
    @Args('createExchangeOfficeInput')
    createExchangeOfficeInput: CreateExchangeOfficeInput,
  ) {
    return this.exchangeOfficeService.create(createExchangeOfficeInput);
  }

  @Query(() => [ExchangeOffice], { name: 'exchangeOffice' })
  findAll() {
    return this.exchangeOfficeService.findAll();
  }

  // @Query(() => ExchangeOffice, { name: 'exchangeOffice' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.exchangeOfficeService.findOne(id);
  // }

  @Mutation(() => ExchangeOffice)
  updateExchangeOffice(
    @Args('updateExchangeOfficeInput')
    updateExchangeOfficeInput: UpdateExchangeOfficeInput,
  ) {
    return this.exchangeOfficeService.update(
      updateExchangeOfficeInput.id,
      updateExchangeOfficeInput,
    );
  }

  @Mutation(() => ExchangeOffice)
  removeExchangeOffice(@Args('id', { type: () => Int }) id: number) {
    return this.exchangeOfficeService.remove(id);
  }
}
