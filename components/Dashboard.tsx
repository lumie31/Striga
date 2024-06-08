'use client';

import React, { FC } from 'react';
import Card from './Card';
import Link from 'next/link';
import LongCard from '@/components/LongCard';
import useDashboard from './hooks/useDashboard';
import { Modal } from './Modal';
import { FiChevronsDown } from 'react-icons/fi';

const Dashboard = () => {
  const { accounts, transactions, onCurrencyTabClicked, onOpenModal } =
    useDashboard();
  if (!accounts.BTC || !accounts.EUR) {
    return (
      <div className='flex justify-center items-center m-6 text-black'>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <div className='flex flex-col my-6 mx-3 md:mx-8'>
        <h1 className='font-bold text-black text-xl py-2'>Wallet Balance</h1>
        <section className='flex justify-between'>
          <div
            className='w-5/12 hover:opacity-90 cursor-pointer'
            onClick={() => onCurrencyTabClicked('EUR')}
          >
            <Card
              currency={accounts.EUR.currency}
              amount={accounts.EUR.availableBalance.hAmount}
            />
          </div>
          <div
            className='w-5/12 hover:opacity-90 cursor-pointer'
            onClick={() => onCurrencyTabClicked('BTC')}
          >
            <Card
              currency={accounts.BTC.currency}
              amount={accounts.BTC.availableBalance.hAmount}
            />
          </div>
        </section>
      </div>
      <div className='flex flex-col my-6 mx-3 md:mx-8'>
        <div className='flex justify-between items-center'>
          <h1 className='font-bold text-black py-2 text-xl'>Transactions</h1>
          <Link href='/' className=''>
            View all
          </Link>
        </div>
        <section className='flex flex-col justify-between gap-2'>
          {transactions &&
            transactions.map((transaction, idx) => (
              <LongCard
                date={transaction.timestamp}
                credit={transaction.credit}
                txtType={transaction.txType}
                key={`${transaction.timestamp} ${idx}`}
                currency={transaction.currency}
                desc={transaction.memo}
              />
            ))}
        </section>
      </div>

      <div className='fixed bottom-16 right-5'>
        <button
          onClick={onOpenModal}
          className='flex justify-around items-center px-4 py-2 text-white rounded-full bg-gray-900 w-[130px] h-[50px] hover:bg-gray-700'
        >
          <FiChevronsDown size={20} />
          Deposit
        </button>
      </div>
      <Modal />
    </>
  );
};

export default Dashboard;
