import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateExchangeOfficeDto {
  @Field()
  name: string;

  @Field()
  country: string;

  @Field()
  address: string;

  @Field()
  contactNumber: string;

  @Field()
  email: string;

  // Add any other fields that are required for creating an ExchangeOffice
}
