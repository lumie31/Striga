import { Http } from '../app/shared/fetchApi/http';
import { getExchangeRate } from '../app/shared/helpers/getExchangeRates';
jest.mock('../app/shared/fetchApi/http');

type ExchangeResponse = {
  base: string;
  rates: { [key: string]: number };
};

test('it fetches exchange rate successfully', async () => {
  const mockResponse: ExchangeResponse = {
    base: 'BTC',
    rates: {
      EUR: 0.9,
    },
  };

  // Mock Http.post to return the mock response
  (Http.post as jest.Mock).mockResolvedValueOnce(mockResponse);

  const exchangeRate = await getExchangeRate();

  expect(exchangeRate).toEqual(mockResponse);
});

test('it throws error on failed fetch', async () => {
  // Mock Http.post to throw an error
  (Http.post as jest.Mock).mockRejectedValueOnce(new Error('Network Error'));

  await expect(getExchangeRate()).rejects.toThrow('Network Error');
});
