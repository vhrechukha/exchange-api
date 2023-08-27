import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ExchangeOffice {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
