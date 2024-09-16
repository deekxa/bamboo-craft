import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import CustomUserButton from "../user-button";
import { GiShoppingCart } from "react-icons/gi";
import { Filter } from "lucide-react";
import { useCart } from "../CartContext";
import { cn } from "../../utils";

const Navbar = ({ setShowSearchGlobal, onSearch }) => {
  const { cart } = useCart();
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For mobile menu toggle

  useEffect(() => {
    if (setShowSearchGlobal) {
      setShowSearchGlobal(setShowSearch);
    }
  }, [setShowSearchGlobal]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value, minPrice, maxPrice);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
    onSearch(searchQuery, event.target.value, maxPrice);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
    onSearch(searchQuery, minPrice, event.target.value);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative w-full bg-gradient-to-r from-green-500 via-yellow-500 to-green-800 h-20 flex items-center px-8 shadow-lg z-40">
      <Link to="/">
        <div className=" text-3xl flex items-center flex-shrink-0 cursor-pointer">
          <img
            src="/Images/pandalogo.png"
            alt="Bamboo Craft Logo"
            className="h-16 w-16 object-contain"
          />
          <h1 className="text-2xl font-bold text-white ml-3">Bamboo Craft</h1>
        </div>
      </Link>

      {/* Mobile Menu Toggle */}
      <div
            className={cn(
              "w-40 ml-10 relative flex-grow max-w-xs",
              showSearch ? "visible" : "invisible"
            )}
          >
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-10 pr-4 py-2 rounded-full bg-gray-200 text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>


      <div className="lg:hidden ml-auto">
        <button className="text-white text-3xl" onClick={toggleMobileMenu}>
          ☰
        </button>
      </div>
      

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-grow items-center justify-between ml-8">
        <div className="flex items-center">
          {/* <div
            className={cn(
              "relative flex-grow max-w-xs",
              showSearch ? "visible" : "invisible"
            )}
          >
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-10 pr-4 py-2 rounded-full bg-gray-200 text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div> */}

          <div
            className={cn(
              "flex items-center relative",
              showFilters ? "invisible" : "visible",
              showSearch ? "visible" : "invisible"
            )}
          >
            <button
              onClick={toggleFilters}
              className="ml-1 p-2 absolute rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition duration-300"
            >
              <Filter className="w-5 h-5" />
            </button>
            <div
              className={cn(
                "flex items-center ml-1 absolute",
                showFilters ? "visible" : "invisible"
              )}
            >
              <input
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onChange={handleMinPriceChange}
                className="w-24 p-2 rounded-lg ml-2 bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
              />
              <input
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                onChange={handleMaxPriceChange}
                className="w-24 p-2 rounded-lg ml-2 bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center text-lg font-semibold text-white gap-8 ml-8">
          <Link
            to="/cart"
            className="hover:text-yellow-300 transition duration-300"
          >
            <div className="flex gap-1 items-center justify-center">
              <GiShoppingCart className="text-4xl" />
              <span
                className={cn(
                  "text-text-1 font-bold",
                  cart.length > 0
                    ? "rounded-full size-4 p-2 self-end -mb-2 -ml-1 flex justify-center items-center bg-yellow-400"
                    : ""
                )}
              >
                {cart.length > 0 ? cart.length : ""}
              </span>
            </div>
          </Link>
          <Link
            to="/"
            className="hover:text-yellow-300 transition duration-300"
          >
            Home
          </Link>
          <div className="relative group">
            <button className="flex items-center hover:text-yellow-300 transition duration-300">
              Products
              <svg
                className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition duration-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300 z-50">
              <Link
                to="/decor"
                className="block px-4 py-2 hover:bg-gray-100 transition duration-300"
              >
                Decor
              </Link>
              <Link
                to="/personalcare"
                className="block px-4 py-2 hover:bg-gray-100 transition duration-300"
              >
                Personal Care
              </Link>
              <Link
                to="/lighting"
                className="block px-4 py-2 hover:bg-gray-100 transition duration-300"
              >
                Lighting
              </Link>
            </div>
          </div>
          <Link
            to="/aboutus"
            className="hover:text-yellow-300 transition duration-300"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="hover:text-yellow-300 transition duration-300"
          >
            Contact Us
          </Link>
          <CustomUserButton />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full bg-green-800 text-white h-screen p-6 lg:hidden flex flex-col items-start">
          <button onClick={toggleMobileMenu} className="ml-auto text-3xl mb-8">
            &times;
          </button>

          <Link to="/" className="text-xl mb-4" onClick={toggleMobileMenu}>
            Home
          </Link>
          <Link
            to="/cart"
            className="text-xl mb-4 flex gap-1 items-center"
            onClick={toggleMobileMenu}
          >
            <GiShoppingCart className="text-4xl" />
            {cart.length > 0 && (
              <span className="bg-yellow-400 rounded-full p-2">
                {cart.length}
              </span>
            )}
          </Link>
          <Link to="/decor" className="text-xl mb-4" onClick={toggleMobileMenu}>
            Decor
          </Link>
          <Link
            to="/personalcare"
            className="text-xl mb-4"
            onClick={toggleMobileMenu}
          >
            Personal Care
          </Link>
          <Link
            to="/lighting"
            className="text-xl mb-4"
            onClick={toggleMobileMenu}
          >
            Lighting
          </Link>
          <Link
            to="/aboutus"
            className="text-xl mb-4"
            onClick={toggleMobileMenu}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-xl mb-4"
            onClick={toggleMobileMenu}
          >
            Contact Us
          </Link>
          <CustomUserButton />
        </div>
      )}
    </div>
  );
};

export default Navbar;
