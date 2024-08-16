import React from 'react';
import Navbar from './navbar/Navbar';
export default function Form() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center w-full h-screen">
        <div className="bg-white px-8 py-10 rounded-3xl border border-gray-300 shadow-md max-w-md w-full">
          <h1 className="text-4xl font-semibold">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Please enter your details.</p>
          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-lg font-medium">Email</label>
              <input
                className="w-full p-3 mt-1 border border-gray-300 rounded-xl bg-transparent"
                placeholder="Enter your Email"
              />
            </div>
            <div>
              <label className="block text-lg font-medium">Password</label>
              <input
                className="w-full p-3 mt-1 border border-gray-300 rounded-xl bg-transparent"
                placeholder="Enter your Password"
                type="password"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input type="checkbox" id="remember" />
                <label className="ml-2 text-sm" htmlFor="remember">Remember me</label>
              </div>
              <button className="text-sm text-violet-500">Forgot Password?</button>
            </div>
            <div className="flex flex-col gap-4">
              <button className="py-3 rounded-xl bg-violet-500 text-white font-bold transition-transform transform hover:scale-105">Sign in</button>
              <button className="flex items-center justify-center py-3 border border-gray-300 rounded-xl transition-transform transform hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6 fill-current text-gray-700">
                  <path fill="#EA4335" d="M24 9.5c3.1 0 5.3 1.3 6.5 2.3l4.8-4.8C31.9 4.5 28.4 3 24 3 14.8 3 7.1 9.6 4.6 18.5l5.8 4.5c1.2-5.6 6.2-10 11.8-10z" />
                  <path fill="#4285F4" d="M46.5 24.5c0-1.5-.1-2.6-.4-3.8H24v7.3h12.9c-.3 2-1.8 5-5.1 6.8l5.7 4.4c3.3-3.1 5-7.7 5-13.7z" />
                  <path fill="#FBBC05" d="M12.4 28.3c-0.8 1.4-1.3 2.8-1.3 4.3s0.5 3 1.3 4.3l5.8-4.5c-0.7-1-1.1-2.1-1.1-3.3s0.4-2.3 1.1-3.3L12.4 28.3z" />
                  <path fill="#34A853" d="M24 42c3.7 0 6.8-1.2 9-3.2l-5.7-4.4c-1.5 1-3.5 1.6-5.3 1.6-4.1 0-7.5-2.7-8.8-6.4l-5.8 4.5C10.5 38.9 16.7 42 24 42z" />
                  <path fill="none" d="M3 3h42v42H3z" />
                </svg>
                <span className="ml-2">Sign in with Google</span>
              </button>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm">Don't have an account? <button className="text-violet-500 ml-1">Sign up</button></p>
          </div>
        </div>
      </div>
    </div>
  );
}