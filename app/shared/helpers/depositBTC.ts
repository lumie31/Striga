import { Http } from '../fetchApi/http';

type Payload = {
  userId: string;
  accountId: string;
  amount: string;
};

type DepositResponse = { invoice: string; id: string; description: string };

export const depositBTC = async ({ userId, accountId, amount }: Payload) => {
  const payload = {
    userId,
    accountId,
    amount,
  };
  return await Http.post<DepositResponse>({
    endpoint: '/wallets/account/lightning/topup',
    body: JSON.stringify(payload),
  });
};
