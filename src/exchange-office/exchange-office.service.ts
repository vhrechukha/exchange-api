import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { CreateExchangeOfficeDto } from './dto/create-exchange-office.dto';
import { UpdateExchangeOfficeDto } from './dto/update-exchange-office.dto';

@Injectable()
export class ExchangeOfficeService {
  constructor(private readonly configService: ConfigService) {}

  create(createExchangeOfficeInput: CreateExchangeOfficeDto) {
    return 'This action adds a new exchangeOffice';
  }

  findAll() {
    return [
      { exampleField: this.configService.get('app.port') },
      { exampleField: '2' },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} exchangeOffice`;
  }

  update(id: number, updateExchangeOfficeInput: UpdateExchangeOfficeDto) {
    return `This action updates a #${id} exchangeOffice`;
  }

  remove(id: number) {
    return `This action removes a #${id} exchangeOffice`;
  }
}
