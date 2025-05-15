import React from 'react'
import { Link } from 'react-router'

const SignUp = () => {
  return (
 
<section className='h-screen flex justify-center items-center'>
    <form
  className="max-w-md bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl overflow-hidden border border-gray-200"
>
  <div className="px-8 py-10 md:px-10">
   <h2 className='text-3xl text-center font-bold text-green-600'>Create An Account</h2>
    <p className="text-center text-zinc-600 dark:text-zinc-400 mt-3">
      Sign up to continue.
    </p>
    <div className="mt-10">
      <div className="relative">
        <label
          className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
         htmlFor="fullName"
          >Full Name</label
        >
        <input
          placeholder="full name"
          className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border rounded-lg "
          name="fullName"
          id="fullName"
          type="text"
        />
      </div>
      <div className="mt-6">
        <label
          className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
         htmlFor="email"
          >Email</label>
        <input
          placeholder="you@example.com"
          className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border rounded-lg "
          name="email"
          id="email"
          type="email"
        />
      </div>
      <div className="mt-6">
        <label
          className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
          htmlFor="password"
          >Password</label
        >
        <input
          placeholder="••••••••"
          className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border rounded-lg "
          name="password"
          id="password"
          type="password"
        />
      </div>
      <div className="mt-10">
        <button
          className="w-full px-4 py-3 bg-green-400 text-white rounded-lg font-bold hover:text-white hover:bg-green-400"
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </div>
  </div>
  <div className="px-8 py-4 bg-green-500">
    <div className="text-sm text-white text-center">
      I have an account.
      <Link className="font-medium underline" to="/login">Log In</Link>
    </div>
  </div>
</form>
</section>

  )
}

export default SignUp



