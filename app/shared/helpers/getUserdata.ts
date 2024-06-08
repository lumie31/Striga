import { Http } from '../fetchApi/http';

export const getUserData = async () => {
  return await Http.get<User>({
    endpoint: '/user/f893fc25-183f-478e-a4d4-fdff14b095cb',
  });
};
