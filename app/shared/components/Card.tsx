import React, { FC } from 'react';

type Props = {
  amount: string;
  currency: Currency;
};

const Card: FC<Props> = ({ amount, currency }) => {
  return (
    <>
      <div className='h-[200px] rounded-lg bg-gradient-to-r from-gray-600 via-gray-700 to-blue-900 text-white flex flex-col justify-center pl-5'>
        <h1 className='font-bold'>{currency}</h1>
        <h3>{amount}</h3>
      </div>
    </>
  );
};

export default Card;
