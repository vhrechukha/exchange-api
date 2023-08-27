import { Injectable } from '@nestjs/common';

import { CreateExchangeOfficeInput } from './dto/create-exchange-office.input';
import { UpdateExchangeOfficeInput } from './dto/update-exchange-office.input';

@Injectable()
export class ExchangeOfficeService {
  create(createExchangeOfficeInput: CreateExchangeOfficeInput) {
    return 'This action adds a new exchangeOffice';
  }

  findAll() {
    return [{ exampleField: '1' }, { exampleField: '2' }];
  }

  findOne(id: number) {
    return `This action returns a #${id} exchangeOffice`;
  }

  update(id: number, updateExchangeOfficeInput: UpdateExchangeOfficeInput) {
    return `This action updates a #${id} exchangeOffice`;
  }

  remove(id: number) {
    return `This action removes a #${id} exchangeOffice`;
  }
}
