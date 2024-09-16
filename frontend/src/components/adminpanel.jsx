import React, { useState } from 'react';
import { API } from '../utils'; 
import { useNavigate } from 'react-router-dom';
import { XIcon } from '@heroicons/react/solid';

const AdminPanel = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleBack = () => {
    navigate(-1); 
  };

  const validatePassword = (password) => {
    const lengthCriteria = /.{6,}/;
    const uppercaseCriteria = /[A-Z]/;
    const lowercaseCriteria = /[a-z]/;
    const digitCriteria = /[0-9]/;
    const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/;

    return (
      lengthCriteria.test(password) &&
      uppercaseCriteria.test(password) &&
      lowercaseCriteria.test(password) &&
      digitCriteria.test(password) &&
      specialCharCriteria.test(password)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Both fields are required.');
      return;
    }

    if (username.length < 3) {
      setError('Username must be at least 3 characters long.');
      return;
    }

    if (!validatePassword(password)) {
      setError(
        'Password must be at least 6 characters long and include uppercase, lowercase, digit, and special character.'
      );
      return;
    }

    setError(''); 
    try {
      const res = await API.post('/authenticate', { username, password });

      if (res.data === 'authorized') {
        navigate('/approval');
      } else if (res.data === 'incorrect username') {
        setError('Incorrect username.');
      } else if (res.data === 'incorrect password') {
        setError('Incorrect password.');
      }
    } catch (error) {
      setError('Incorrect username or password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto">
        
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center bg-green-100 h-64 md:h-auto">
          <img
            src="/Images/formpic.jpeg"
            alt="Decorative background"
            className="w-full h-full object-cover"
          />

          <div className="absolute top-10 left-10 w-16 h-16 bg-green-300 rounded-full opacity-70 animate-bounce"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 bg-green-200 rounded-full opacity-70 animate-ping"></div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6 space-y-6 relative">
          <button
            onClick={handleBack}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 focus:outline-none"
            aria-label="Back"
          >
            <XIcon className="w-6 h-6" />
          </button>

          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900">
            Admin Login
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please log in to access the admin panel.
          </p>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`mt-1 block w-full px-3 py-2 border ${
                  error ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm`}
                placeholder="Enter your username"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`mt-1 block w-full px-3 py-2 border ${
                  error ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm`}
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
