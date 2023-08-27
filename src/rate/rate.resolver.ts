import { Resolver } from '@nestjs/graphql';

import { BaseResolver } from '../common/base/base.resolver';
import { ExchangeOfficeService } from '../exchange-office/exchange-office.service';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
import { Rate } from './rate.entity';
import { RateService } from './rate.service';

@Resolver(() => Rate)
export class RateResolver extends BaseResolver(
  Rate,
  CreateRateDto,
  UpdateRateDto,
  ExchangeOfficeService,
) {
  constructor(private readonly rateService: RateService) {
    super(rateService);
  }
}
