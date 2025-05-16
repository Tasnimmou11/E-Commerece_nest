import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { userAccountInfo } from '../slices/counterSlice';

const Login = () => {
  const navigate =useNavigate();
  const [userData,setUserData] =useState({
      username:"",
      password:"",
    });

    const logeduserData ={
      userName: 'demo account',
      userPhoto: 'https://ui-avatars.com/api/?name=Demo+Account&background=random',
    }
    const dispatch = useDispatch()
  
    const handleLogin = async(e)=>{
      e.preventDefault();
      // console.log(userData);
      dispatch(userAccountInfo(logeduserData))
      localStorage.setItem('userData', JSON.stringify(logeduserData))
      const options = {
  method: 'POST',
  url: 'https://api.freeapi.app/api/v1/users/login',
  headers: {accept: 'application/json', 'content-type': 'application/json'},
  data: userData,
};

try {
  const res = await axios.request(options);
  console.log(res.data.data.accessToken);
  localStorage.setItem("token", res.data.data.accessToken);
  localStorage.setItem("user", JSON.stringify(res.data.data.user));
  // console.log(res.data.data.user);
  setTimeout(()=>{
    navigate("/")
  },2000);
  // dispatch()
   toast.success(res.data.message);
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
    <form onSubmit={handleLogin}
  className="max-w-md bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl overflow-hidden border border-gray-200"
>
  <div className="px-8 py-10 md:px-10">
    <img src="/logo.png" alt="logo" className='m-auto' />
    <p className="text-center text-zinc-600 dark:text-zinc-400 mt-3">
      We missed you, log in to continue.
    </p>
    <div className="mt-10">
      <div className="relative">
        <label
          className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
         htmlFor="username"
          >Username</label
        >
        <input
        onChange={(e)=> setUserData((prev)=>({
          ...prev,
          username: e.target.value}))}
          placeholder="username"
          className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border rounded-lg "
          name="username"
          id="username"
          type="text"
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
        />
      </div>
      <div className="mt-10">
        <button
          className="w-full px-4 py-3 cursor-pointer bg-green-400 text-white rounded-lg font-bold hover:text-white hover:bg-green-500"
          type="submit"
        >
          Log in
        </button>
      </div>
    </div>
  </div>
  <div className="px-8 py-4 bg-green-500">
    <div className="text-sm text-white text-center">
      Don't have an account?
      <Link className="font-medium underline" to="/signup">Sign up</Link>
    </div>
  </div>
</form>
</section>

  )
}

export default Login



