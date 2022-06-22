export enum ACCOUNT_TYPE {
  CHECKING = 'CHECKING',
  SAVINGS = 'SAVINGS',
  CREDIT_CARD = 'CREDIT_CARD',
}

export interface Account {
  id: string;
  account_type: ACCOUNT_TYPE;
  amount: number;
  iban: number;
  createdAt: Date;
  updatedAt: Date;
}
