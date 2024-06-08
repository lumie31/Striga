import { Http } from '../fetchApi/http';
import { getIPAddr } from '../utils/getIPAddr';

type Payload = {
  userId: string;
  sourceAccountId: string;
  destinationAccountId: string;
  memo?: string;
  amount: string;
};
type ConverterResponse = {
  status: string;
  txType: string;
  [key: string]: string | number | object;
};

export const convertCurrency = async ({
  userId,
  sourceAccountId,
  destinationAccountId,
  amount,
}: Payload) => {
  const { ip } = await getIPAddr();
  const payload = {
    userId,
    sourceAccountId,
    destinationAccountId,
    ip,
    amount,
  };
  return await Http.post<ConverterResponse>({
    endpoint: '/wallets/swap',
    body: JSON.stringify(payload),
  });
};
