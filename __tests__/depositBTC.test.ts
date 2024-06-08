import { Http } from '../app/shared/fetchApi/http';
import { depositBTC } from '../app/shared/helpers/depositBTC';

jest.mock('../app/shared/fetchApi/http');

type Payload = {
  userId: string;
  accountId: string;
  amount: string;
};

type DepositResponse = { invoice: string; id: string; description: string };

test('depositBTC calls Http.post with correct data', async () => {
  const mockUserId = 'user123';
  const mockAccountId = 'acc1234';
  const mockAmount = '0.01';
  const mockResponse: DepositResponse = {
    invoice: 'lnbc...',
    id: 'deposit-id',
    description: 'Bitcoin Deposit',
  };

  // Mock Http.post
  (Http.post as jest.Mock).mockResolvedValueOnce(mockResponse);

  const depositData = await depositBTC({
    userId: mockUserId,
    accountId: mockAccountId,
    amount: mockAmount,
  });

  // Assert that Http.post is called with expected data
  expect(Http.post).toHaveBeenCalledWith({
    endpoint: '/wallets/account/lightning/topup',
    body: JSON.stringify({
      userId: mockUserId,
      accountId: mockAccountId,
      amount: mockAmount,
    }),
  });

  // Assert returned data matches the mock response
  expect(depositData).toEqual(mockResponse);
});

test('depositBTC throws error on failed fetch', async () => {
  const mockPayload: Payload = {
    userId: 'user123',
    accountId: 'acc1234',
    amount: '0.01',
  };

  // Mock Http.post to throw an error
  (Http.post as jest.Mock).mockRejectedValueOnce(new Error('Network Error'));

  await expect(depositBTC(mockPayload)).rejects.toThrow('Network Error');
});
