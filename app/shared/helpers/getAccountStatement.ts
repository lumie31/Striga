import { endDate, startDate } from '../constant';
import { Http } from '../fetchApi/http';

export const getAccountStatement = async (
  userId: string,
  accountId: string,
  page = 1,
  limit = 10
) => {
  const payload = {
    userId,
    startDate,
    endDate,
    accountId,
    page,
    limit,
  };
  return await Http.post<Transactions>({
    endpoint: '/wallets/get/account/statement',
    body: JSON.stringify(payload),
  });
};
