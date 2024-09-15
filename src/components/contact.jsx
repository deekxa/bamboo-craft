import React from "react";
import { useForm } from "react-hook-form";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { API } from "../utils";

const ContactUs = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { user } = useUser();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
   
    navigate('/');
    try {
      await API.post('/contact', { ...data, userEmail: user.emailAddresses[0].emailAddress });
      localStorage.setItem('contactFormMessage', 'Message sent successfully!');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      localStorage.setItem('contactFormMessage', 'Error sending message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex w-full max-w-4xl mx-auto">
        <div className="relative w-full md:w-1/2 flex items-center justify-center bg-green-100">
          <img
            src="/Images/adminpic.jpeg"
            alt="contactimage"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-10 left-10 w-24 h-24 bg-green-300 rounded-full opacity-70 animate-bounce"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-200 rounded-full opacity-70 animate-ping"></div>
        </div>

        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-8 space-y-6 relative">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="mt-2 text-center text-sm text-gray-600">We'd love to hear from you!</p>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  {...register("name", { required: "Name is required" })}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm`}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={user?.emailAddresses?.[0]?.emailAddress || ""}
                  disabled
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  {...register("message", { required: "Message is required" })}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm`}
                  placeholder="Your message"
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;