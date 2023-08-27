import { Field, Float, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ExchangeOffice } from '../exchange-office/exchange-office.entity';

@ObjectType()
@Entity()
export class Exchange {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  from: string;

  @Field()
  @Column()
  to: string;

  @Field(() => Float)
  @Column('float')
  ask: number;

  @Field()
  @CreateDateColumn()
  date: Date;

  @Field(() => ExchangeOffice)
  @ManyToOne(() => ExchangeOffice, (exchangeOffice) => exchangeOffice.exchanges)
  exchangeOffice: ExchangeOffice;
}
