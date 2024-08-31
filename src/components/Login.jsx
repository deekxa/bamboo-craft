import React, { useState } from 'react';
import Navbar from './navbar/Navbar';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const signupSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  terms: yup.bool().oneOf([true], 'You must agree to terms and conditions'),
});

const Form = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleFormType = () => {
    setIsSignup(!isSignup);
    reset();  // Reset form state when toggling between login and signup
  };

  const schema = isSignup ? signupSchema : loginSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data, isSignup ? 'Signup Data' : 'Login Data');
  };

  const formFields = isSignup
    ? [
        { label: 'Username', placeholder: 'Create a username', type: 'text', name: 'username' },
        { label: 'Email', placeholder: 'Enter your email', type: 'text', name: 'email' },
        { label: 'Password', placeholder: 'Create a password', type: 'password', name: 'password' },
      ]
    : [
        { label: 'Email', placeholder: 'Enter your email', type: 'text', name: 'email' },
        { label: 'Password', placeholder: 'Enter a password', type: 'password', name: 'password' },
      ];

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center w-full h-screen">
        <div className="bg-white px-8 py-10 rounded-3xl border border-gray-300 shadow-md max-w-md w-full">
          <h1 className="text-4xl font-semibold flex justify-center">{isSignup ? 'Sign Up' : 'Log In'}</h1>
          <div className="flex justify-between mb-4">
            <button
              onClick={() => toggleFormType()}
              className={`py-2 px-4 rounded-xl ${!isSignup ? 'bg-violet-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            >
              Log In
            </button>
            <button
              onClick={() => toggleFormType()}
              className={`py-2 px-4 rounded-xl ${isSignup ? 'bg-violet-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            >
              Sign Up
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
            {formFields.map((field, index) => (
              <div key={index}>
                <label>{field.label}</label>
                <input
                  className="w-full p-3 mt-1 border border-gray-300 rounded-xl bg-transparent"
                  placeholder={field.placeholder}
                  {...register(field.name)}
                  type={field.type}
                />
                {errors[field.name] && <p className="text-red-500 text-sm mt-1">{errors[field.name]?.message}</p>}
              </div>
            ))}
            {isSignup && (
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms-and-conditions"
                    {...register('terms')}
                  />
                  <label className="ml-2 text-sm" htmlFor="terms-and-conditions">
                    I agree to terms and conditions
                  </label>
                </div>
                {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms?.message}</p>}
              </div>
            )}
            <div className="flex flex-col gap-4">
              <button
                type="submit"
                className="py-4 rounded-xl bg-violet-500 text-white font-bold transition-transform transform hover:scale-105"
              >
                {isSignup ? 'Create Account' : 'Log In'}
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm">
              {isSignup ? 'Already have an account? Click here to ' : 'Don’t have an account? Click here to '}
              <button
                onClick={() => toggleFormType()}
                className="text-violet-500 ml-1"
              >
                {isSignup ? 'log in' : 'sign up'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
