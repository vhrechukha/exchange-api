import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Rate } from './rate.entity';
import { RateResolver } from './rate.resolver';
import { RateService } from './rate.service';

@Module({
  imports: [TypeOrmModule.forFeature([Rate])],
  providers: [RateResolver, RateService],
})
export class RateModule {}
