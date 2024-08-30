import React from 'react';
import Navbar from './navbar/Navbar';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export default function Form() {
  // Define your validation schema using Yup
  const schema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    terms: yup.bool().oneOf([true], 'You must agree to terms and conditions'),
  });

  // Connect the schema to react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data, 'Hello');
  };

  const formFields = [
    {
      label: 'Email',
      placeholder: 'Enter your email',
      type: 'text',
      name: 'email',
    },
    {
      label: 'Password',
      placeholder: 'Enter a password',
      type: 'password',
      name: 'password',
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center w-full h-screen">
        <div className="bg-white px-8 py-10 rounded-3xl border border-gray-300 shadow-md max-w-md w-full">
          <h1 className="flex justify-center text-4xl font-semibold">Log in</h1>
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
                {errors[field.name] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[field.name]?.message}
                  </p>
                )}
              </div>
            ))}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms-and-condition"
                  {...register('terms')}
                />
                <label className="ml-2 text-sm" htmlFor="terms-and-condition">
                  I agree to terms and conditions
                </label>
              </div>
              {errors.terms && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.terms?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-4">
              <button
                type="submit"
                className="py-4 rounded-xl bg-violet-500 text-white font-bold transition-transform transform hover:scale-105"
              >
                Log In
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm">
              Have an account? Click here{' '}
              <button className="text-violet-500 ml-1">login</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
