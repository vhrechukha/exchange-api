import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TopExchangersByCountryDto {
  @Field()
  countryRank: number;

  @Field()
  countryName: string;

  @Field()
  exchangerName: string;

  @Field()
  totalProfit: number;
}
