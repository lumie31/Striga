import { Http } from '../fetchApi/http';

export const getExchangeRate = async () => {
  return await Http.post<ExchangeResponse>({
    endpoint: '/trade/rates',
    body: '{}',
  });
};
