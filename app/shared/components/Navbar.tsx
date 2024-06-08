import React from 'react';
import { FiUser } from 'react-icons/fi';

export default function Navbar() {
  return (
    <div className='flex justify-between md:justify-end items-center text-black mx-3 md:mx-8 '>
      <div className='md:hidden font-bold bg-gradient-to-r from-orange-500 via-red-500 to-blue-800 p-1 text-white rounded-md'>
        LUMI Group
      </div>

      <span className='flex justify-around items-center self-end rounded-md bg-slate-200 text-black p-2 w-[100px]'>
        <FiUser size={20} />
        Striga
      </span>
    </div>
  );
}
