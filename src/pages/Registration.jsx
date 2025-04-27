import React, { useState } from "react";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Registration = () => {
  const auth = getAuth(); 

  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  
  const handleSignUp = () => {
  

    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    /* From Uiverse.io by themrsami */
    <div className="h-screen flex items-center justify-center">
      <div className="relative max-w-sm sm:mx-auto px-4 py-10 bg-white mx-8 md:mx-0 shadow-lg rounded-3xl sm:p-10">
        <div className="max-w-md mx-auto">
          <h1 className="font-open-sans font-semibold text-xl text-center">
            Registration
          </h1>
          <div className="mt-5">
            <label
              className="font-semibold font-nunito text-sm text-gray-600 pb-1 block"
              htmlFor="fullname"
            >
              Full Name
            </label>
            <input
              onChange={(e) =>
                setUserData({ ...userData, fullName: e.target.value })
              }
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="text"
              id="fullname"
            />
            <label
              className="font-semibold font-nunito text-sm text-gray-600 pb-1 block"
              htmlFor="login"
            >
              E-mail
            </label>
            <input
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="text"
              id="login"
            />
            <label
              className="font-semibold font-nunito text-sm text-gray-600 pb-1 block"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="password"
              id="password"
            />
          </div>

          <div className="mb-5">
            <button
              onClick={handleSignUp}
              className="font-nunito py-2 px-4 cursor-pointer bg-blue-600 hover:bg-brand focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <div className="flex justify-center w-full items-center">
            <div>
              <button className="flex items-center font-nunito justify-center gap-3 py-2 px-16 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                <FcGoogle />
                <span>Sign in with Google</span>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            <Link
              className="text-xs font-nunito text-gray-500 uppercase dark:text-gray-400 hover:underline"
              to="/login"
            >
              or log in
            </Link>
            <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;




