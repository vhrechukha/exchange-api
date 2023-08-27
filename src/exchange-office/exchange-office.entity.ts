import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';

import { Country } from '../country/country.entity';
import { Exchange } from '../exchange/exchange.entity';
import { Rate } from '../rate/rate.entity';

@ObjectType()
@Entity()
export class ExchangeOffice {
  @Field(() => ID)
  @PrimaryColumn()
  id: string;

  @Field()
  @Column()
  name: string;

  @Field(() => Country)
  @ManyToOne(() => Country)
  country: Country;

  @Field(() => [Exchange], { nullable: true })
  @OneToMany(() => Exchange, (exchange) => exchange.exchangeOffice)
  exchanges: Exchange[];

  @Field(() => [Rate], { nullable: true })
  @OneToMany(() => Rate, (rate) => rate.exchangeOffice)
  rates: Rate[];
}
