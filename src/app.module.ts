import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DirectiveLocation } from 'graphql/language';
import { GraphQLDirective } from 'graphql/type';

import { AppService } from './app.service';
import { AppConfigModule } from './config/app.config.module';
import { CountryModule } from './country/country.module';
import { DbProviderModule } from './database/database.module';
import { ExchangeModule } from './exchange/exchange.module';
import { ExchangeOfficeModule } from './exchange-office/exchange-office.module';
import { RateModule } from './rate/rate.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      installSubscriptionHandlers: true,
      buildSchemaOptions: {
        directives: [
          new GraphQLDirective({
            name: 'upper',
            locations: [DirectiveLocation.FIELD_DEFINITION],
          }),
        ],
      },
    }),
    AppConfigModule,
    DbProviderModule,
    ExchangeOfficeModule,
    ExchangeModule,
    CountryModule,
    RateModule,
  ],
  providers: [AppService],
})
export class AppModule {}
