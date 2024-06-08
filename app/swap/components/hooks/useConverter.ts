'use client';

import { useAppContext } from '@/app/shared/context/useAppContext';
import { convertCurrency } from '@/app/shared/helpers/convertCurrency';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { handleError } from '../../../shared/utils/HandleError';

type Props = {
  exchangeRate?: ExchangeResponse['BTCEUR'];
};

const useConverter = ({ exchangeRate }: Props) => {
  const [fromCurrency, setFromCurrency] = useState<Currency>('BTC');
  const { accounts, user } = useAppContext();
  const transferOptions = ['BTC', 'EUR'];
  const [amountToConvert, setAmountToConvert] = useState<number>(0);
  const [valueInOtherCurrency, setValueInOtherCurrency] = useState<number>(0);
  const toCurrency = fromCurrency === 'BTC' ? 'EUR' : 'BTC';

  const handleCurrencyChange = (e: any) => {
    setFromCurrency(e.target.value);
    setValueInOtherCurrency(0);
    setAmountToConvert(0);
  };

  const handleAmountChange = (e: any) => {
    const amount = +e.target.value;
    setAmountToConvert(amount);
  };

  const onBlur = () => {
    if (!exchangeRate) {
      return;
    }
    if (fromCurrency === 'BTC' && !!amountToConvert) {
      setValueInOtherCurrency(+exchangeRate?.sell * amountToConvert);
      return;
    }
    setValueInOtherCurrency(amountToConvert / +exchangeRate?.sell);
    return;
  };

  const swapCurrency = async (val: number | string) => {
    const { data, error } = await convertCurrency({
      userId: user.userId as string,
      amount: val.toString(),
      sourceAccountId: accounts[fromCurrency].accountId,
      destinationAccountId: accounts[toCurrency].accountId,
    });

    if (data && data.status === 'COMMITTED') {
      toast.success('Currency Swapped Successfully!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } else {
      handleError(error);
    }
  };

  const handleSubmit = async () => {
    if (fromCurrency === 'BTC') {
      const toBtc = Math.round(amountToConvert * 100000000).toFixed(2);
      swapCurrency(toBtc);
      return;
    }
    if (fromCurrency === 'EUR') {
      const toEUR = Math.round(amountToConvert * 100);
      swapCurrency(toEUR);
      return;
    }
  };

  return {
    transferOptions,
    handleCurrencyChange,
    handleAmountChange,
    toCurrency,
    fromCurrency,
    valueInOtherCurrency,
    onBlur,
    handleSubmit,
  };
};

export default useConverter;
