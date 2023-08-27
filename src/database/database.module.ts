import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { DatabaseType, DataSource } from 'typeorm';

import { AppConfigModule } from '../config/app.config.module';
import { AppConfigService } from '../config/app.config.service';
import { Country } from '../country/country.entity';
import { Country1693137721487 } from './migrations/1693137721487-Country';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [AppConfigModule],
      useFactory: async (appConfigService: AppConfigService) => ({
        keepConnectionAlive: true,
        type: 'postgres' as DatabaseType,
        host: appConfigService.get('db.host'),
        port: appConfigService.get('db.port'),
        username: appConfigService.get('db.username'),
        password: appConfigService.get('db.password'),
        database: appConfigService.get('db.database'),
        schema: appConfigService.get('db.schema'),
        entities: [Country],
        migrations: [Country1693137721487],
        migrationsTableName: 'migrations_typeorm',
        migrationsRun: true,
      }),
      inject: [AppConfigService],
      dataSourceFactory: async (options) => {
        return await new DataSource(options).initialize();
      },
    } as TypeOrmModuleAsyncOptions),
  ],
})
export class DbProviderModule {}
