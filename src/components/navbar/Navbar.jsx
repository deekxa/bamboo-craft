import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='flex justify-between bg-gradient-to-r from-yellow-400 to-green-800 h-32 items-center bg-transparent/80 '>
        <div className="ml-5 h-28 w-28 overflow-hidden">
        <img
          src="/images/bamboologo.png"
          alt="logo"
          className="h-full w-full object-cover"
        />
      </div>
      
        <div className=' text-xl font-medium text-white sm:flex items-center gap-10 hidden '>
             <FaSearch />
             <div className="flex space-x-6"></div>
             <div  className="hover:text-gray-700 cursor-pointer"> <Link to="/">Home</Link></div> 
             <div  className="hover:text-gray-700 cursor-pointer">About Us</div>
            <div className="hover:text-gray-700 cursor-pointer">Lighting</div>
            <div className="hover:text-gray-700 cursor-pointer">Decor</div>
            <div  className="hover:text-gray-700 cursor-pointer">Personal Care</div>
          <div  className="hover:text-gray-700 cursor-pointer"> <Link to="/login">Login</Link> </div>          
          <div className="hover:text-gray-700 cursor-pointer"> <Link to="/signup">Signup</Link> </div>
          
        </div>
    </div>
  )
}
export default Navbar