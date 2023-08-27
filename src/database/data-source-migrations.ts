import 'reflect-metadata';

import * as dotenv from 'dotenv';
dotenv.config();

import { DataSource } from 'typeorm';

import { Country } from '../country/country.entity';
import { Exchange } from '../exchange/exchange.entity';
import { ExchangeOffice } from '../exchange-office/exchange-office.entity';
import { Rate } from '../rate/rate.entity';
import { Country1693137721487 } from './migrations/1693137721487-Country';
import { RestModels1693139817207 } from './migrations/1693139817207-RestModels';

// https://github.com/typeorm/typeorm/issues/8810
const DataSourceConfig = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  schema: process.env.DB_SCHEMA || 'public',
  entities: [Country, Rate, Exchange, ExchangeOffice],
  migrations: [Country1693137721487, RestModels1693139817207],
  migrationsTableName: 'migrations_typeorm',
  synchronize: false,
});

export default DataSourceConfig;
