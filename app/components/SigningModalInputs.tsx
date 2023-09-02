import React from "react";

interface Props {
  input: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    city: string;
  };
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSignin: boolean;
}

export default function SigningModalInput({
  input,
  handleChangeInput,
  isSignin,
}: Props) {
  return (
    <div>
      {isSignin ? null : (
        <div className='my-3 flex justify-between text-sm'>
          <input
            type='text'
            className='border rounded p-2 py-3 w-[49%]'
            placeholder='First Name'
            value={input.firstName}
            onChange={handleChangeInput}
            name='firstName'
          />
          <input
            type='text'
            className='border rounded p-2 py-3 w-[49%]'
            placeholder='Last Name'
            value={input.lastName}
            onChange={handleChangeInput}
            name='lastName'
          />
        </div>
      )}
      <div className='my-3 flex justify-between text-sm'>
        <input
          type='text'
          className='border rounded p-2 py-3 w-full'
          placeholder='Email'
          value={input.email}
          onChange={handleChangeInput}
          name='email'
        />
      </div>
      {isSignin ? null : (
        <div className='my-3 flex justify-between text-sm'>
          <input
            type='text'
            className='border rounded p-2 py-3 w-[49%]'
            placeholder='Phone'
            value={input.phone}
            onChange={handleChangeInput}
            name='phone'
          />
          <input
            type='text'
            className='border rounded p-2 py-3 w-[49%]'
            placeholder='City'
            value={input.city}
            onChange={handleChangeInput}
            name='city'
          />
        </div>
      )}
      <div className='my-3 flex justify-between text-sm'>
        <input
          type='password'
          className='border rounded p-2 py-3 w-full'
          placeholder='Password'
          value={input.password}
          onChange={handleChangeInput}
          name='password'
        />
      </div>
    </div>
  );
}
