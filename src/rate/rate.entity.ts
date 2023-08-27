import { Field, Float, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ExchangeOffice } from '../exchange-office/exchange-office.entity';

@Entity()
@ObjectType()
export class Rate {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  from: string;

  @Column()
  @Field()
  to: string;

  @Column('float')
  @Field(() => Float)
  in: number;

  @Column('float')
  @Field(() => Float)
  out: number;

  @Column('float')
  @Field(() => Float)
  reserve: number;

  @CreateDateColumn()
  @Field()
  date: Date;

  @Field(() => ExchangeOffice)
  @ManyToOne(() => ExchangeOffice, (exchangeOffice) => exchangeOffice.rates)
  exchangeOffice: ExchangeOffice;
}
