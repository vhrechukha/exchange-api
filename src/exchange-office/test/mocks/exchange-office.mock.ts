import { countryMock } from '../../../country/test/mocks';
import { exchangeMock } from '../../../exchange/test/mocks';
import { rateMock } from '../../../rate/test/mocks';
import { ExchangeOffice } from '../../exchange-office.entity';

const exchangeOfficeMock: ExchangeOffice = {
  id: '1',
  name: 'Exchanger 1',
  country: countryMock,
  exchanges: [{ ...exchangeMock }],
  rates: [{ ...rateMock }],
};

export default exchangeOfficeMock;
