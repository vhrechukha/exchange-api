import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseService } from '../common/base/base.service';
import { Country } from './country.entity';

@Injectable()
export class CountryService extends BaseService<Country> {
  constructor(
    @InjectRepository(Country)
    readonly countryRepository: Repository<Country>,
  ) {
    super(Country, countryRepository);
  }

  async findByCode(code: string): Promise<Country> {
    const entity = await this.countryRepository.findOneBy({ code });
    if (!entity) {
      throw new NotFoundException(`${this._entity.name} not found`);
    }
    return entity;
  }
}
