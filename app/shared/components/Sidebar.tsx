import React from 'react';
import Link from 'next/link';
import { FiLogOut, FiPieChart, FiLock, FiRepeat } from 'react-icons/fi';

export default function Sidebar() {
  return (
    <div className='w-[120px] h-full fixed left-0 top-0 bg-black text-white flex flex-col justify-between items-center'>
      <section className='h-[300px] flex flex-col justify-between items-center'>
        <div className='mt-4 mb-6 font-bold bg-gradient-to-r from-orange-500 via-red-500 to-blue-800 p-1 rounded-md'>
          LUMI Group
        </div>
        <ul className='h-[150px] flex flex-col justify-around items-center gap-8 text-sm'>
          <li className=''>
            <Link
              href='/'
              className='flex flex-col justify-center gap-1 items-center hover:text-slate-400'
            >
              <FiPieChart size={20} />
              Dashboard
            </Link>
          </li>

          <li className=''>
            <Link
              href='/swap'
              className='flex flex-col justify-center gap-1 items-center hover:text-slate-400'
            >
              <FiRepeat size={20} />
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
      </section>
      <button
        className='flex flex-col justify-center items-center gap-1 text-white disabled:opacity-50 disabled:cursor-not-allowed'
        disabled
      >
        <FiLogOut size={20} />
        Logout
      </button>
    </div>
  );
}
