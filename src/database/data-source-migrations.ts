import 'reflect-metadata';

import * as dotenv from 'dotenv';
dotenv.config();

import { DataSource } from 'typeorm';

import { ExchangeOffice } from '../exchange-office/entities/exchange-office.entity';

// https://github.com/typeorm/typeorm/issues/8810
const DataSourceConfig = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  schema: process.env.DB_SCHEMA || 'public',
  entities: [ExchangeOffice],
  migrations: ['src/database/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations_typeorm',
  synchronize: false,
});

export default DataSourceConfig;
