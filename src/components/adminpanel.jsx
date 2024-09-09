import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import {API} from "../utils";
const AdminPanel = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Function to validate password complexity
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

  const handleSubmit =async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!username || !password) {
      setError("Both fields are required.");
      return;
    }

    // Username validation (e.g., minimum 3 characters)
    if (username.length < 3) {
      setError("Username must be at least 3 characters long.");
      return;
    }

    // Password validation
    if (!validatePassword(password)) {
      setError(
        "Password must be at least 6 characters long and include uppercase, lowercase, digit, and special character."
      );
      return;
    }

    // Clear error if validation passes
    setError("");
    
  const res = await API.post("/authenticate", { username, password })
    console.log(res.data)
  };

  return (
    <div>
      <Navbar /> 
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-semibold mb-6 text-center">Admin Login</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
