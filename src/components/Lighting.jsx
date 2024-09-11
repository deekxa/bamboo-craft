import { Link } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import React, { useState } from "react";
import AddLighting from "./addLighting";
import { useQuery } from "@tanstack/react-query";
import { Loader2, RefreshCw } from "lucide-react";
import { API } from "../utils";

const fetchLighteningData = async () => {
  const response = await API.get("/getLighting");
  console.log(response.data);
  return response.data;
};

const setShowSearchGlobal = (setShowSearch) => {
  setShowSearch(true);
};

export const Lighting = () => {
  const [openForm, setOpenForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const {
    data: array,
    isLoading,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["lightingData"],
    queryFn: fetchLighteningData,
  });

  const handleSearch = (query, min, max) => {
    setSearchQuery(query);
    setMinPrice(min);
    setMaxPrice(max);
  };

  const handleRefresh = () => {
    refetch();
  };

  const filteredArray = array?.filter((item) => {
    const matchesQuery = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesMinPrice =
      minPrice === "" || item.cost >= parseFloat(minPrice);
    const matchesMaxPrice =
      maxPrice === "" || item.cost <= parseFloat(maxPrice);
    return matchesQuery && matchesMinPrice && matchesMaxPrice;
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 width={40} height={40} className="animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        {error.message}
      </div>
    );
  }

  return (
    <div className="relative animate-pageLoad">
      <Navbar
        setShowSearchGlobal={setShowSearchGlobal}
        onSearch={handleSearch}
      />
      <div className="flex justify-end gap-4 items-center px-4 py-2">
        {!openForm && (
          <button
            onClick={() => setOpenForm(true)}
            className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-blue-400 animate-pulse transition-transform transform hover:scale-105 duration-300"
          >
            Add Product
          </button>
        )}
        {/* Uncomment if you need the Refresh button
        <button
          onClick={handleRefresh}
          className={`bg-green-500 ${
            openForm ? "hidden" : ""
          } text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 flex items-center`}
          disabled={isFetching}
        >
          <RefreshCw
            className={`mr-2 h-5 w-5 ${isFetching ? "animate-spin" : ""} `}
          />
          Refresh
        </button> */}
      </div>
      <div className="text-2xl font-bold text-green-500 h-[10vh] items-center sm:text-3xl sm:leading-relaxed flex justify-center animate-heading">
        Lighting
      </div>
      {!openForm && (
        <div className="pb-10 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 animate-fadeIn">
          {filteredArray.map((data, index) => (
            <div
              key={index}
              className="relative shadow-md border border-gray-200 p-4 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105 duration-300 hover:animate-flip"
            >
              <div className="mb-4 overflow-hidden">
                <img
                  className="w-full h-48 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110"
                  src={data.image}
                  alt={data.title}
                />
              </div>
              <div className="mb-2 font-semibold text-lg truncate">
                {data.title}
              </div>
              <div className="text-lg font-bold text-green-600 mb-4">
                RS {data.cost}
              </div>
              <Link to={`/lighting/${index}`} state={{ product: data }}>
                <button className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105 duration-200">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
      {openForm && <AddLighting formOpeningStateTrigger={setOpenForm} />}
      <Footer />
    </div>
  );
};
