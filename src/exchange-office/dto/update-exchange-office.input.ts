import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

import { CreateExchangeOfficeInput } from './create-exchange-office.input';

@InputType()
export class UpdateExchangeOfficeInput extends PartialType(
  CreateExchangeOfficeInput,
) {
  @Field(() => Int)
  id: number;
}
