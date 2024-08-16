import React from 'react';
import Navbar from './navbar/Navbar';
export default function Signup()
 {
  return(
    <div>
        <Navbar />
  <div className="flex items-center justify-center w-full h-screen">
    <div className="bg-white px-8 py-10 rounded-3xl border border-gray-300 shadow-md max-w-md w-full">
      <h1 className=" flex justify-center text-4xl font-semibold">Signup</h1>
      

      <div className="mt-6 space-y-4">
      <div>
          <label className="block text-lg font-medium">Username</label>
          <input
            className="w-full p-3 mt-1 border border-gray-300 rounded-xl bg-transparent"
            placeholder="Create a username"
          />
        </div>

        
        <div>
          <label className="block text-lg font-medium">Email Address</label>
          <input
            className="w-full p-3 mt-2 border border-gray-300 rounded-xl bg-transparent"
            placeholder="Enter your Email"
          />
        </div>
        <div>
          <label className="block text-lg font-medium">Password</label>
          <input
            className="w-full p-3 mt-2 border border-gray-300 rounded-xl bg-transparent"
            placeholder="Enter your Password"
            type="password"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <input type="checkbox" id="terms and conditio" />
            <label className="ml-2 text-sm" htmlFor="remember">I agree to terms and conditions</label>
          </div>
         
        </div>
        <div className="flex flex-col gap-4">
          <button className="py-4 rounded-xl bg-violet-500 text-white font-bold transition-transform transform hover:scale-105">Create account</button>
       
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-sm">Have an account? Click here <button className="text-violet-500 ml-1">login</button></p>
      </div>
    </div>
  </div>
</div>
);
}
    