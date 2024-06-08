import { Http } from '../app/shared/fetchApi/http';
import { getAccountStatement } from '../app/shared/helpers/getAccountStatement';
import { endDate, startDate } from '../app/shared/constant/index';

jest.mock('../app/shared/fetchApi/http');

test('getAccountStatement calls Http.post with correct data (default page and limit)', async () => {
  const mockUserId = 'user123';
  const mockAccountId = 'acc1234';
  const mockResponse: Transactions = {
    transactions: [],
  };

  // Mock Http.post
  (Http.post as jest.Mock).mockResolvedValueOnce(mockResponse);

  const statementData = await getAccountStatement(mockUserId, mockAccountId);

  // Assert that Http.post is called with expected data (default page and limit)
  expect(Http.post).toHaveBeenCalledWith({
    endpoint: '/wallets/get/account/statement',
    body: JSON.stringify({
      userId: mockUserId,
      startDate,
      endDate,
      accountId: mockAccountId,
      page: 1,
      limit: 10,
    }),
  });

  // Assert returned data matches the mock response
  expect(statementData).toEqual(mockResponse);
});

test('getAccountStatement calls Http.post with correct data (custom page and limit)', async () => {
  const mockUserId = 'user123';
  const mockAccountId = 'acc1234';
  const customPage = 2;
  const customLimit = 25;
  const mockResponse: Transactions = {
    transactions: [],
  };

  // Mock Http.post
  (Http.post as jest.Mock).mockResolvedValueOnce(mockResponse);

  const statementData = await getAccountStatement(
    mockUserId,
    mockAccountId,
    customPage,
    customLimit
  );

  // Assert that Http.post is called with expected data (custom page and limit)
  expect(Http.post).toHaveBeenCalledWith({
    endpoint: '/wallets/get/account/statement',
    body: JSON.stringify({
      userId: mockUserId,
      startDate,
      endDate,
      accountId: mockAccountId,
      page: 2,
      limit: 25,
    }),
  });

  // Assert returned data matches the mock response
  expect(statementData).toEqual(mockResponse);
});

test('getAccountStatement throws error on failed fetch', async () => {
  const mockUserId = 'user123';
  const mockAccountId = 'acc1234';

  // Mock Http.post to throw an error
  (Http.post as jest.Mock).mockRejectedValueOnce(new Error('Network Error'));

  await expect(getAccountStatement(mockUserId, mockAccountId)).rejects.toThrow(
    'Network Error'
  );
});
