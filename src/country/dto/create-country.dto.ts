import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCountryDto {
  @Field()
  code: string;

  @Field()
  name: string;
}
