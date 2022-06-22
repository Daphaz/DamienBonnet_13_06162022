import { customAlphabet, nanoid } from 'nanoid';

import { Account, ACCOUNT_TYPE } from '@/ts';

const mockIban1 = customAlphabet('0123456789', 16)();
const mockIban2 = customAlphabet('0123456789', 16)();

export const mockAccounts: Account[] = [
  {
    id: nanoid(),
    account_type: ACCOUNT_TYPE.CHECKING,
    amount: 208279,
    iban: Number(mockIban1),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: nanoid(),
    account_type: ACCOUNT_TYPE.SAVINGS,
    amount: 1092842,
    iban: Number(mockIban2),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: nanoid(),
    account_type: ACCOUNT_TYPE.CREDIT_CARD,
    amount: 18430,
    iban: Number(mockIban1),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
