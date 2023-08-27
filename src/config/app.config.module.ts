import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import appConfig from './app.config';
import { AppConfigService } from './app.config.service';
import dbConfig from './db.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.production'],
      isGlobal: true,
      load: [appConfig, dbConfig],
    }),
  ],
  providers: [AppConfigService, ConfigService],
  exports: [AppConfigService, ConfigService],
})
export class AppConfigModule {}
