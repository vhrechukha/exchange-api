import { registerAs } from '@nestjs/config';
import * as process from 'process';

export default registerAs('db', () => ({
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  schema: process.env.DB_SCHEMA || 'public',
}));
