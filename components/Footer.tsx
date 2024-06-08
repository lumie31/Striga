import Link from 'next/link';
import React from 'react';
import { FiLogOut, FiPieChart, FiLock, FiRepeat } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className='md:hidden fixed inset-x-0 bottom-0 bg-black shadow'>
      <ul className='h-[50px] flex justify-around items-center my-1 text-white'>
        <li className=''>
          <Link
            href='/'
            className='flex flex-col justify-center gap-1 items-center hover:text-slate-400'
          >
            <FiPieChart size={15} />
            Dashboard
          </Link>
        </li>
        <li className=''>
          <Link
            href='/swap'
            className='flex flex-col justify-center gap-1 items-center hover:text-slate-400'
          >
            <FiRepeat size={15} />
            Swap
          </Link>
        </li>
        <li>
          <button
            className='flex flex-col justify-center items-center gap-1 text-white disabled:opacity-50 disabled:cursor-not-allowed'
            disabled
          >
            <FiLock size={20} />
            Settings
          </button>
        </li>
      </ul>
    </footer>
  );
}
