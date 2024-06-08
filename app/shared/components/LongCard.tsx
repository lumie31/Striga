import React, { FC } from 'react';

type Props = {
  date: string;
  credit: string;
  txtType: string;
  desc: string;
  currency: Currency;
};

const TransactionCard: FC<Props> = ({ date, txtType, desc, currency }) => {
  const formattedDate = new Date(date).toDateString();
  const formattedTime = new Date(date).toLocaleTimeString('en-us', {
    hour12: false,
  });
  return (
    <div className='text-sm md:text-base w-full h-[120px] rounded-lg bg-slate-100 text-black flex justify-between py-5 px-5'>
      <div className='flex flex-col justify-center'>
        <p>
          <strong>Description:</strong>
          <span className='text-green-600'> {desc}</span>
        </p>
        <p>
          <strong>Currency:</strong> {currency}
        </p>
        <p>
          <strong>Transaction code:</strong> {txtType}
        </p>
        <p className='md:hidden'>
          <strong>Date:</strong>
          &nbsp;{formattedDate}
        </p>
      </div>
      <div className='md:flex md:flex-col justify-center hidden'>
        <p>{formattedDate}</p>
        <p>{formattedTime}</p>
      </div>
    </div>
  );
};

export default TransactionCard;
