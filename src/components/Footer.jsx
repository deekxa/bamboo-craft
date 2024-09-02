import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const Footer = () => {
  const [formStatus, setFormStatus] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async data => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus('Subscription successful! Thank you for subscribing.');
      } else {
        setFormStatus('Subscription failed. Please try again.');
      }
    } catch (error) {
      setFormStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Title and Description */}
        <div className="flex flex-col space-y-4 mb-8 md:mb-0">
          <h1 className="text-3xl font-bold">BAMBOO CRAFT</h1>
          <p className="text-sm">
            Premium bamboo products crafted for style and sustainability.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-4 mb-8 md:mb-0">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-gray-400">Home</a></li>
            <li><a href="/aboutus" className="hover:text-gray-400">AboutUs</a></li>
            <li><a href="/lighting" className="hover:text-gray-400">Lighting</a></li>
            <li><a href="/decor" className="hover:text-gray-400">Decor</a></li>
            <li><a href="/personalcare" className="hover:text-gray-400">Personal Care</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-4 mb-8 md:mb-0">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-sm">Butwal, Rupandehi</p>
          <div className="flex space-x-4">
            <a href="https://facebook.com/BambooCraft" className="hover:text-gray-400">
              <FaFacebookF size={20} />
            </a>
            <a href="https://instagram.com/BambooCraft" className="hover:text-gray-400">
              <FaInstagram size={20} />
            </a>
            <a href="https://twitter.com/BambooCraft" className="hover:text-gray-400">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">Stay Updated</h3>
          <p className="text-sm">Subscribe to our newsletter for updates.</p>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Your email"
              {...register('email', { 
                required: 'Email is required', 
                pattern: { 
                  value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, 
                  message: 'Invalid email address' 
                } 
              })}
              className="bg-gray-800 border border-gray-700 rounded-md p-2 text-white placeholder-gray-400 w-full"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            <div className="flex items-center text-sm">
              <input
                type="checkbox"
                id="newsletter"
                {...register('agreement', { 
                  required: 'You must agree to receive promotional emails' 
                })}
                className="mr-2"
              />
              <label htmlFor="newsletter">I agree to receive promotional emails.</label>
            </div>
            {errors.agreement && <p className="text-red-500 text-sm">{errors.agreement.message}</p>}
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md w-full md:w-auto"
            >
              Subscribe
            </button>
          </form>
          {formStatus && <p className="text-sm mt-4">{formStatus}</p>}
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} BAMBOO CRAFT. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
