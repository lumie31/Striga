import { useEffect, useState } from 'react';
import { useAppContext } from '@/app/shared/context/useAppContext';
import { getAccountStatement } from '@/app/shared/helpers/getAccountStatement';

const useDashboard = () => {
  const { accounts, isModalOpen, setModalOpen } = useAppContext();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [transactionsHistoryCurrency, setTransactionsHistoryCurrency] =
    useState<Currency>('BTC');

  const onOpenModal = () => {
    setModalOpen((prev) => !prev);
  };

  const onCurrencyTabClicked = (currency: Currency) => {
    setTransactionsHistoryCurrency(currency);
  };

  useEffect(() => {
    const transaction = async () => {
      if (transactionsHistoryCurrency === 'EUR') {
        const { data } = await getAccountStatement(
          accounts?.EUR?.ownerId,
          accounts?.EUR?.accountId
        );
        setTransactions(data.transactions);
        return;
      }
      const { data } = await getAccountStatement(
        accounts?.BTC?.ownerId,
        accounts?.BTC?.accountId
      );
      setTransactions(data.transactions);
    };
    transaction();
  }, [accounts, transactionsHistoryCurrency]);

  return {
    accounts,
    isModalOpen,
    onOpenModal,
    onCurrencyTabClicked,
    transactions,
  };
};

export default useDashboard;
