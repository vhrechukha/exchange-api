import { Field, InputType, PartialType } from '@nestjs/graphql';

import { CreateExchangeDto } from './create-exchange.dto';

@InputType()
export class UpdateExchangeDto extends PartialType(CreateExchangeDto) {
  @Field(() => String)
  id: string;
}
