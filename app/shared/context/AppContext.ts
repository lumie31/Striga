'use client';

import { createContext, Dispatch, SetStateAction } from 'react';

type AppContextProps = {
  user: Partial<User>;
  transactionHistory?: any;
  setCurrentUser: Dispatch<SetStateAction<Partial<User>>>;
  accounts: Wallets;
  isModalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setAccounts: Dispatch<SetStateAction<Wallets>>;
};

export const AppContext = createContext<AppContextProps>({
  user: {},
  setCurrentUser: (_) => {},
  accounts: {} as Wallets,
  isModalOpen: false,
  setModalOpen: (_) => {},
  setAccounts: (_) => {
    return null;
  },
});
