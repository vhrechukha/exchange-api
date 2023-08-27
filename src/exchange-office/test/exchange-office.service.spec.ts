import { Test, TestingModule } from '@nestjs/testing';

import { ExchangeOfficeService } from '../exchange-office.service';

describe('ExchangeOfficeService', () => {
  let service: ExchangeOfficeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExchangeOfficeService],
    }).compile();

    service = module.get<ExchangeOfficeService>(ExchangeOfficeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
