import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const signupSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  terms: yup.bool().oneOf([true], "You must agree to terms and conditions"),
});

const Form = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleFormType = () => {
    setIsSignup(!isSignup);
    reset();
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
    console.log(data, isSignup ? "Signup Data" : "Login Data");
  };

  const formFields = isSignup
    ? [
        {
          label: "Username",
          placeholder: "Create a username",
          type: "text",
          name: "username",
        },
        {
          label: "Email",
          placeholder: "Enter your email",
          type: "text",
          name: "email",
        },
        {
          label: "Password",
          placeholder: "Create a password",
          type: "password",
          name: "password",
        },
      ]
    : [
        {
          label: "Email",
          placeholder: "Enter your email",
          type: "text",
          name: "email",
        },
        {
          label: "Password",
          placeholder: "Enter a password",
          type: "password",
          name: "password",
        },
      ];

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen px-4 py-8 bg-gray-100">
        <div className="bg-white px-6 py-8 rounded-xl border border-gray-300 shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-semibold text-center mb-6">
            {isSignup ? "Sign Up" : "Log In"}
          </h1>
          <div className="flex justify-between mb-4">
            <button
              onClick={() => toggleFormType()}
              className={`py-2 px-4 rounded-xl text-sm sm:text-base ${
                !isSignup
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Log In
            </button>
            <button
              onClick={() => toggleFormType()}
              className={`py-2 px-4 rounded-xl text-sm sm:text-base ${
                isSignup
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Sign Up
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {formFields.map((field, index) => (
              <div key={index}>
                <label className="block text-sm font-medium mb-1">
                  {field.label}
                </label>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder={field.placeholder}
                  {...register(field.name)}
                  type={field.type}
                />
                {errors[field.name] && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors[field.name]?.message}
                  </p>
                )}
              </div>
            ))}
            {isSignup && (
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms-and-conditions"
                  {...register("terms")}
                  className="h-4 w-4 text-green-500 border-gray-300 rounded"
                />
                <label
                  className="text-sm"
                  htmlFor="terms-and-conditions"
                >
                  I agree to terms and conditions
                </label>
                {errors.terms && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.terms?.message}
                  </p>
                )}
              </div>
            )}
            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-white rounded-lg font-bold transition-transform transform hover:scale-105"
            >
              {isSignup ? "Create Account" : "Log In"}
            </button>
          </form>
          <div className="mt-6 text-center text-sm">
            <p>
              {isSignup
                ? "Already have an account? Click here to "
                : "Don’t have an account? Click here to "}
              <button
                onClick={() => toggleFormType()}
                className="text-green-500 font-medium"
              >
                {isSignup ? "log in" : "sign up"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
