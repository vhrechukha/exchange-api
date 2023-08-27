import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseService } from '../common/base/base.service';
import { Rate } from './rate.entity';

@Injectable()
export class RateService extends BaseService<Rate> {
  constructor(
    @InjectRepository(Rate)
    private readonly rateRepository: Repository<Rate>,
  ) {
    super(Rate, rateRepository);
  }
}
