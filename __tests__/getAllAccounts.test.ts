import { Http } from '../app/shared/fetchApi/http';
import { getAllAccounts } from '../app/shared/helpers/getAllAccounts';
import { endDate, startDate } from '../app/shared/constant/index';

jest.mock('../app/shared/fetchApi/http');

// Define mock objects
type AllAccounts = {
  // ... define account object structure
};

test('getAllAccounts calls Http.post with correct data (default page)', async () => {
  const mockUserId = 'user123';
  const mockResponse: AllAccounts = {
    // ... define mock account data
  };

  // Mock Http.post
  (Http.post as jest.Mock).mockResolvedValueOnce(mockResponse);

  const accountsData = await getAllAccounts(mockUserId);

  // Assert that Http.post is called with expected data (default page)
  expect(Http.post).toHaveBeenCalledWith({
    endpoint: '/wallets/get/all',
    body: JSON.stringify({
      userId: mockUserId,
      startDate,
      endDate,
      page: 1,
    }),
  });

  // Assert returned data matches the mock response
  expect(accountsData).toEqual(mockResponse);
});

test('getAllAccounts calls Http.post with correct data (custom page)', async () => {
  const mockUserId = 'user123';
  const customPage = 2;
  const mockResponse: AllAccounts = {
    // ... define mock account data
  };

  // Mock Http.post
  (Http.post as jest.Mock).mockResolvedValueOnce(mockResponse);

  const accountsData = await getAllAccounts(mockUserId, customPage);

  // Assert that Http.post is called with expected data (custom page)
  expect(Http.post).toHaveBeenCalledWith({
    endpoint: '/wallets/get/all',
    body: JSON.stringify({
      userId: mockUserId,
      startDate,
      endDate,
      page: customPage,
    }),
  });

  // Assert returned data matches the mock response
  expect(accountsData).toEqual(mockResponse);
});

test('getAllAccounts throws error on failed fetch', async () => {
  const mockUserId = 'user123';

  // Mock Http.post to throw an error
  (Http.post as jest.Mock).mockRejectedValueOnce(new Error('Network Error'));

  await expect(getAllAccounts(mockUserId)).rejects.toThrow('Network Error');
});
