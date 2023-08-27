import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseService } from '../common/base/base.service';
import { Exchange } from './exchange.entity';

@Injectable()
export class ExchangeService extends BaseService<Exchange> {
  constructor(
    @InjectRepository(Exchange)
    readonly exchangeRepository: Repository<Exchange>,
  ) {
    super(Exchange, exchangeRepository);
  }
}
