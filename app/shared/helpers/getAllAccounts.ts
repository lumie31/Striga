import { endDate, startDate } from '../constant';
import { Http } from '../fetchApi/http';

export const getAllAccounts = async (userId: string, page = 1) => {
  const payload = {
    userId,
    startDate,
    endDate,
    page,
  };
  return await Http.post<AllAccounts>({
    endpoint: '/wallets/get/all',
    body: JSON.stringify(payload),
  });
};
