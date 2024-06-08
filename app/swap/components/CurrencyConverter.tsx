'use client';

import React, { FC } from 'react';
import useConverter from '../utils/useConverter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
  exchangeRates: ExchangeResponse;
};

const CurrencyConverter: FC<Props> = ({ exchangeRates }) => {
  const {
    handleCurrencyChange,
    handleAmountChange,
    onBlur,
    toCurrency,
    transferOptions,
    fromCurrency,
    valueInOtherCurrency,
    handleSubmit,
  } = useConverter({ exchangeRate: exchangeRates.BTCEUR });

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 max-w-lg w-full mt-24'>
      <h2 className='text-2xl font-bold text-center mb-4'>Swap Currency</h2>
      <div className='mb-4'>
        <label
          htmlFor='btcAmount'
          className='block text-gray-700 text-md font-bold mb-2'
        >
          From:
        </label>
        <div className='flex justify-between'>
          <select
            onChange={handleCurrencyChange}
            value={fromCurrency}
            className='shadow border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          >
            {transferOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>

          <input
            type='number'
            id='amount'
            onChange={handleAmountChange}
            onBlur={onBlur}
            placeholder={`Enter amount in ${fromCurrency ?? 'BTC'}`}
            className='shadow border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
      </div>
      <div className='mb-6'>
        <label
          htmlFor='eurAmount'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          To: {toCurrency}
        </label>
        <input
          type='number'
          id='toAmount'
          disabled
          value={valueInOtherCurrency}
          placeholder={`amount in ${toCurrency}`}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='flex justify-center items-center'>
        <button
          className='h-[50px] px-4 py-2 rounded-lg text-white bg-black hover:bg-gray-700'
          onClick={handleSubmit}
        >
          Exchange
        </button>
      </div>
      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  );
};

export default CurrencyConverter;
