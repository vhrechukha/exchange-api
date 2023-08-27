import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class CreateRateDto {
  @Field()
  from: string;

  @Field()
  to: string;

  @Field(() => Float)
  in: number;

  @Field(() => Float)
  out: number;

  @Field(() => Float)
  reserve: number;

  @Field(() => String)
  exchangeOfficeId: string; // Assuming the ID of ExchangeOffice is a string; adjust the type as needed
}
