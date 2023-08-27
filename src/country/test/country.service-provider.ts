import { CountryService } from '../country.service';
import { countryMock } from './mocks';

export const countryServiceProvider = {
  provide: CountryService,
  useFactory: () => ({
    create: jest.fn(() => countryMock),
    findAll: jest.fn(() => [countryMock]),
    findOne: jest.fn(() => countryMock),
    update: jest.fn(() => countryMock),
    remove: jest.fn(() => null),
    findByCode: jest.fn(() => countryMock),
  }),
};
