import { Field, InputType, PartialType } from '@nestjs/graphql';

import { CreateExchangeOfficeDto } from './create-exchange-office.dto';

@InputType()
export class UpdateExchangeOfficeDto extends PartialType(
  CreateExchangeOfficeDto,
) {
  @Field()
  name: string;
}
