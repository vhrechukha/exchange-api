import { Field, InputType, PartialType } from '@nestjs/graphql';

import { CreateCountryDto } from './create-country.dto';

@InputType()
export class UpdateCountryDto extends PartialType(CreateCountryDto) {
  @Field(() => String)
  id: string; // Assuming the ID is a string; adjust the type as needed

  // All other fields from CreateCountryDTO are inherited and made optional
}
