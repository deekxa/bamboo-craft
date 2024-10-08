import React from "react";
import Navbar from "./navbar/Navbar";
import { FaQuoteLeft } from "react-icons/fa";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      
      {/* About Us Section */}
      <section className="px-4 lg:px-4 py-6 bg-gray-100 animate-fadeInUp duration-500">
        <div className="max-w-screen-md mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-800 pt-2 pb-4 sm:text-3xl sm:leading-relaxed transition-all duration-300 ease-in-out transform hover:scale-105">
            About Us
          </h1>
          <p className="text-base text-gray-700 sm:w-3/4 mx-auto mb-20 leading-relaxed opacity-100 animate-fadeInUp animate-delay-300 transition-opacity duration-500">
            Our greatest motivation to work with bamboo is to help restore
            Nepal's natural beauty and ecological balance. We aim to guide our
            society towards sustainable consumerism—one that allows us to
            indulge in quality products while healing our country's environment
            through mindful choices. By embracing bamboo, we not only support
            local artisans but also contribute to the preservation of Nepal's
            rich biodiversity and natural resources.
          </p>
        </div>
      </section>
      
      {/* Premium Bamboo Section */}
      <article className="relative bg-[url(https://images.pexels.com/photos/6712946/pexels-photo-6712946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center bg-no-repeat animate-fadeInSlow">
        <div className="absolute inset-0 bg-black/60 sm:bg-gradient-to-r sm:from-black/70 sm:to-black/40"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-lg text-left lg:w-1/2 lg:flex lg:flex-col lg:justify-end transition-all duration-500 ease-in-out">
            <h1 className="text-3xl font-semibold sm:text-4xl text-white leading-tight tracking-tight transition-transform duration-500 ease-in-out transform hover:translate-y-2">
              Elevate Your Space with
              <strong className="block text-rose-400 font-extrabold text-4xl sm:text-5xl animate-fadeInUp animate-delay-300">
                Premium Bamboo Products
              </strong>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white leading-relaxed font-semibold opacity-100 animate-fadeInUp animate-delay-400 transition-opacity duration-500">
              Discover our wide range of beautifully crafted bamboo items that
              bring elegance and sustainability into your home. Shop now to find
              the perfect piece for your space.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                to="/decor"
                className="rounded bg-rose-600 px-6 py-3 text-sm font-medium text-white shadow-md hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </article>
      
      {/* Artisan Section with Quote */}
      <div className="container mx-auto px-6 py-10"></div>
      <div className="flex flex-col md:flex-row items-center justify-between relative w-full h-auto md:h-64 bg-FAF9F6 shadow-2xl rounded-lg p-8 animate-fadeInUp duration-500">
        <div className="w-8/12 text-xl">
          <FaQuoteLeft className="float-left mr-2 text-4xl text-yellow-500 transition-all duration-300 ease-in-out hover:scale-110" />
          <p className="leading-relaxed text-gray-700 opacity-100 animate-fadeInUp animate-delay-200 transition-opacity duration-500">
            At Bamboo-craft, we take pride in transforming bamboo from its
            natural state into stunning, handcrafted furniture and artifacts.
            Our skilled artisans, with years of experience and a deep passion
            for their craft, meticulously shape each piece to celebrate the
            unique imperfections that make bamboo products truly special. We
            create each item with care, offering both our own designs and custom
            pieces tailored to your specific needs. Every product we offer
            reflects our commitment to quality, artistry, and the natural beauty
            of bamboo.
          </p>
        </div>

        <div className="relative shadow-md font-medium my-5 py-2 px-4 text-white cursor-pointer bg-yellow-600 hover:bg-yellow-500 rounded text-lg text-center w-48 animate-pulse transition-transform duration-300 ease-in-out transform hover:scale-105">
          <span className="absolute right-0 top-0 animate-ping inline-flex rounded-full h-3 w-3 bg-yellow-600"></span>
          <Link
            to="/contact"
            className="flex items-center justify-center h-full w-full"
          >
            Contact Now
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
