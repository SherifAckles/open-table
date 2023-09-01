import React from "react";
import Link from "next/link";
import SigningModal from "./SigningModal";

export default function NavBar() {
  return (
    <nav className='bg-white p-2 flex justify-between'>
      <Link href='/'>
        <img
          src='https://cdn.otstatic.com/cfe/14/images/opentable-logo-153e80.svg'
          alt='logo'
          className='flex w-40 h-11 '></img>
      </Link>
      <div>
        <div className='flex'>
          {/* Rendering two instances of the `SigningModal` component, one for signing in and one for signing up. */}
          <SigningModal isSignin={true} /> {/* Signing in modal */}
          <SigningModal isSignin={false} />
        </div>
      </div>
    </nav>
  );
}
