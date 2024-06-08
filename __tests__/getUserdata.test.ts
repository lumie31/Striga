import { Http } from '../app/shared/fetchApi/http';
import { getUserData } from '../app/shared/helpers/getUserdata';
jest.mock('../app/shared/fetchApi/http'); // Mock the Http class

type User = {
  id: string;
  name: string;
};

test('getUserData fetches user data successfully', async () => {
  const mockUser: User = {
    id: 'f893fc25-183f-478e-a4d4-fdff14b095cb',
    name: 'John Doe',
  };

  // Mock Http.get to return the mock user
  (Http.get as jest.Mock).mockResolvedValueOnce(mockUser);

  const userData = await getUserData();

  expect(userData).toEqual(mockUser);
});

test('getUserData throws error on failed fetch', async () => {
  // Mock Http.get to throw an error
  (Http.get as jest.Mock).mockRejectedValueOnce(new Error('Network Error'));

  await expect(getUserData()).rejects.toThrow('Network Error');
});
