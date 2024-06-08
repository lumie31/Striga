'use client';

import React, { FormEvent, useRef } from 'react';
import useDashboard from './hooks/useDashboard';
import { depositBTC } from '@/app/shared/helpers/depositBTC';

export const Modal = () => {
  const { onOpenModal, isModalOpen, accounts } = useDashboard();
  const ref = useRef<HTMLInputElement>(null);
  if (!isModalOpen) return null;

  const handleDepositClicked = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!ref.current?.value) {
      return;
    }

    const { data } = await depositBTC({
      userId: accounts.BTC.ownerId,
      accountId: accounts.BTC.accountId,
      amount: ref.current.value,
    });
    if (data.invoice) {
      navigator.clipboard
        .writeText(data.invoice)
        .then(() => {
          window.open('https://htlc.me/', '_blank');
          if (ref.current) {
            ref.current.value = '';
          }
        })
        .catch((error) => {
          console.error('Could not copy text: ', error);
        });
      onOpenModal();
    }
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white p-8 rounded-lg w-5/6 md:max-w-xl'>
        <form onSubmit={handleDepositClicked}>
          <div className='f'>
            <h2 className='font-bold text-red-500 text-center text-lg uppercase'>
              NB: Important Info about Deposits
            </h2>

            <ol className='text-sm text-black my-2 mx-2 list-decimal text'>
              <li>
                When you click the submit button, you will be redirected to a
                different website.
              </li>
              <li>A code would be automatically copied to your clipboard.</li>
              <li>
                Please paste the copied code in the input on the website using{' '}
                <q>Ctrl V</q>.
              </li>
              <li>
                Click on <q>Send Payment</q>.
              </li>
              <li>Return to application and refresh to see your Deposit.</li>
            </ol>
          </div>
          <input
            type='text'
            name='amount'
            id='amount'
            ref={ref}
            placeholder='Enter amount'
            className='border-2 border-gray-300 text-black p-2 rounded-lg w-full mb-4'
          />
          <div className='flex justify-center space-x-4 w-full mt-4'>
            <button
              type='submit'
              className='bg-black hover:bg-gray-700 text-white py-2 px-4 rounded-lg'
            >
              Submit
            </button>
            <button
              onClick={onOpenModal}
              className='bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg ml-4'
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
