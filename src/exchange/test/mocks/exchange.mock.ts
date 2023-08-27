import { exchangeOfficeMock } from '../../../exchange-office/test/mocks';
import { Exchange } from '../../exchange.entity';

const exchangeMock: Exchange = {
  id: '5df84817-cddc-4e0f-bce9-4ab5bd02290a',
  from: 'EUR',
  to: 'USD',
  ask: 110.0,
  date: new Date('2023-04-24T20:55:33.000Z'),
  exchangeOffice: { ...exchangeOfficeMock },
};

export default exchangeMock;
