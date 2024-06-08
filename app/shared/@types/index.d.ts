type User = {
  firstName: string;
  lastName: string;
  email: string;
  userId: string;
};
type Currency = 'EUR' | 'BTC';

type AllAccounts = {
  wallets: {
    accounts: Wallets;
  }[];
};
type Accounts = {
  accountId: string;
  parentWalletId: string;
  currency: Currency;
  ownerId: string;
  availableBalance: {
    amount: string;
    currency: string;
    hAmount: string;
    fiatEquivalentBalance: string;
    fiatCurrency: string;
    hFiatEquivalentBalance: string;
    rate: string;
  };
};
type ExchangeResponse = {
  [key: string]: {
    price: string;
    buy: string;
    sell: string;
    timestamp: number;
    hTimestamp: Date;
    currency: Currency;
  };
};

type ErrorResponse = {
  message: string;
  errorCode: string;
  errorDetails: [];
};
type Wallets = {
  [key in Currency]: Accounts;
};

type Transactions = { transactions: Transaction[] };

type Transaction = {
  timestamp: string;
  credit: string;
  txType: string;
  memo: string;
  currency: Currency;
};
