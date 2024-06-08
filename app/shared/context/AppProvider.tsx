'use client';
import { FC, useContext, useEffect, useState } from 'react';
import { AppContext } from './AppContext';
import { getAllAccounts } from '../helpers/getAllAccounts';

type Props = {
  children: React.ReactNode;
};
export const AppProvider: FC<Props> = ({ children }) => {
  const initialData = {
    userId: 'f893fc25-183f-478e-a4d4-fdff14b095cb',
    firstName: 'John',
    lastName: 'Doe',
  };
  const [user, setCurrentUser] = useState<Partial<User>>(initialData);
  const [accounts, setAccounts] = useState<Wallets>({} as Wallets);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  if (useContext(AppContext) === undefined) {
    throw new Error('context is not defined');
  }

  useEffect(() => {
    const loadAccount = async () => {
      if (!user.userId) {
        return;
      }
      const response = await getAllAccounts(user.userId);
      const accountsData = response.data?.wallets[0].accounts;
      const data = {
        BTC: accountsData?.BTC,
        EUR: accountsData?.EUR,
      };
      if (data) {
        setAccounts(data);
      }
    };
    loadAccount();
  }, [user.userId]);

  return (
    <AppContext.Provider
      value={{
        user,
        setCurrentUser,
        isModalOpen,
        setModalOpen,
        accounts,
        setAccounts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
