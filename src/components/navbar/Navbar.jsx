import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div className="flex justify-between bg-gradient-to-r from-yellow-400 to-green-800 h-32 items-center bg-transparent/80 ">
      <div className="ml-5 h-28 w-28 overflow-hidden">
        <img
          src="/images/bamboologo.png"
          alt="logo"
          className="h-full w-full object-cover"
        />
      </div>

      <div className=" text-xl font-medium text-white sm:flex items-center gap-10 hidden ">
        <FaSearch />
        <div>
          {" "}
          <Link to="/">Home</Link>{" "}
        </div>

        <div>
          {" "}
          <Link to="/aboutus">AboutUs</Link>
        </div>
       

        <div>
          
          <Link to="/decor">Decor</Link></div>
          
        <div>Personal Care</div>
        <div>Lighting</div>
        
        

        <div>
          {" "}
          <Link to="/login">Login/Signup</Link>{" "}
        </div>
        <div>
          {" "}
          {/* <Link to="/signup">Signup</Link>{" "} */}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
