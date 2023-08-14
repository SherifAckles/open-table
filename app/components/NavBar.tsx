import React from "react";
import Link from "next/link";
import logo from "../../public/logo.svg";

export default function NavBar() {
  return (
    <nav className='bg-white p-2 flex justify-between'>
      <Link href='/' className='flex items-center text-gray-700 text-2xl'>
        <span className='icon flex items-center justify-center w-11 h-11 bg-blue-900'>
          <img src={logo.src} alt='logo' className='h-8 w-8 text-white' />
        </span>
        <span className='ml-2 font-bold'>OpenTable</span>
      </Link>
      <div>
        <div className='flex'>
          <button className='bg-blue-400 text-white border p-1 px-4 rounded mr-3'>
            Sign in
          </button>
          <button className='border p-1 px-4 rounded'>Sign up</button>
        </div>
      </div>
    </nav>
  );
}
