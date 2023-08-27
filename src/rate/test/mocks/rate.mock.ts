import { exchangeOfficeMock } from '../../../exchange-office/test/mocks';
import { Rate } from '../../rate.entity';

const rateMock: Rate = {
  id: '072df4fb-f790-4b3a-b2fa-182ce25411ff',
  from: 'EUR',
  to: 'USD',
  in: 1.1,
  out: 1.0,
  reserve: 120000.0,
  date: new Date('2023-04-24T20:55:33.000Z'),
  exchangeOffice: { ...exchangeOfficeMock },
};

export default rateMock;
