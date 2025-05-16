import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const SignUp = () => {
  const navigate =useNavigate();
  const [userData,setUserData] =useState({
    username:"",
    email:"",
    password:"",
    //role:"USER",

  });
  const handleSignUp = async(e)=> {
    e.preventDefault();
    // console.log(userData);
  
  
  //  try{
  //    const res = await axios.post
  //   ("https://api.freeapi.app/api/v1/users/register",
  //     {headers: 
  //       {accept: 'application/json', 
  //         'content-type': 'application/json'

  //       },
  //       data:userData,
  //     }
  //   );
  //      console.log(res);
  // } catch (error){
  //   console.log(error);
  // }
  // };
  
  const options = {
  method: 'POST',
  url: 'https://api.freeapi.app/api/v1/users/register',
  headers: {accept: 'application/json', 'content-type': 'application/json'},
  data: userData,
};

try {
  const res = await axios.request(options);
  // console.log(res.data.message);
  toast.success(res.data.message);
  setTimeout(()=>{
    navigate("/login")
  },2000);
} catch (error) {
  toast.error(error.response.data.message);
  console.error(error.response.data.errors);

}
 };
  return (
 
<section className='h-screen flex justify-center items-center'>
    <ToastContainer
position="top-right"
autoClose={5000}
rtl={false} 

theme="light"

/>
    <form onSubmit={handleSignUp}
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
         htmlFor="username"
          >Username</label>
        <input
        onChange={(e)=> setUserData((prev)=>({
          ...prev,
          username: e.target.value}))}
          placeholder="username"
          className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border rounded-lg "
          name="userame"
          id="username"
          type="text"
          required
        />
      </div>
      <div className="mt-6">
        <label
          className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
         htmlFor="email"
          >Email</label>
        <input
         onChange={(e)=> setUserData((prev)=>({
          ...prev,
          email: e.target.value}))}
          placeholder="you@example.com"
          className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border rounded-lg "
          name="email"
          id="email"
          type="email"
          required
        />
      </div>
      <div className="mt-6">
        <label
          className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
          htmlFor="password"
          >Password</label
        >
        <input
          onChange={(e)=> setUserData((prev)=>({
          ...prev,
          password: e.target.value}))}
          placeholder="••••••••"
          className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border rounded-lg "
          name="password"
          id="password"
          type="password"
          required
        />
      </div>
      <div className="mt-10">
        <button
          className="w-full px-4 py-3 cursor-pointer bg-green-400 text-white rounded-lg font-bold hover:text-white hover:bg-green-400"
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



