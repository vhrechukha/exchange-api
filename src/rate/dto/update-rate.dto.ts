import { Field, InputType, PartialType } from '@nestjs/graphql';

import { CreateRateDto } from './create-rate.dto';

@InputType()
export class UpdateRateDto extends PartialType(CreateRateDto) {
  @Field(() => String)
  id: string;
}
