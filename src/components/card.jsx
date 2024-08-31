import React from "react";
import { FaStar } from "react-icons/fa";

export const Card = () => {
  return (
    <>
      <div className=" border-2 border-rose-400  w-[20%] h-[50vh]">
        <div className="">
          <img className="w-full h-[35vh]" src="../images/2.jpg" alt="error" />
        </div>
        <div>
          <div className="truncate ">Premium Planet Large Disposable & Biodegradable Plates Set with Cutlery | 25 Plates | 25 Forks | 25 Knives | Eco Friendly and Sturdy</div>
          <div>Ads by Etsy seller</div>
          <div className="flex items-center">
            <div><FaStar/></div>
            <div><FaStar/></div>
            <div><FaStar/></div>
            <div><FaStar/></div>
            <div><FaStar/></div>
            <div>(29)</div>
          </div>
          <div>USD 27.49</div>
        </div>
      </div>
    </>
  );
};
