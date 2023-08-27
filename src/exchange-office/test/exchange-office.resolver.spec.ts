import { Test, TestingModule } from '@nestjs/testing';

import { ExchangeOfficeResolver } from '../exchange-office.resolver';
import { ExchangeOfficeService } from '../exchange-office.service';

describe('ExchangeOfficeResolver', () => {
  let resolver: ExchangeOfficeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExchangeOfficeResolver, ExchangeOfficeService],
    }).compile();

    resolver = module.get<ExchangeOfficeResolver>(ExchangeOfficeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
