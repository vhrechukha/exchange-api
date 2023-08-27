import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class CreateExchangeDto {
  @Field()
  from: string;

  @Field()
  to: string;

  @Field(() => Float)
  ask: number;

  @Field(() => String)
  exchangeOfficeId: string;
}
