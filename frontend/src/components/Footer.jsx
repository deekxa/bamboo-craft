import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 footer-content">
        <div className="flex flex-col items-start pl-4">
          <h1 className="text-2xl font-bold mb-5 animate-fadeInUp">BAMBOO CRAFT</h1>
          <p className="text-sm text-justify animate-fadeInUp">
            At Bamboo Craft, we offer premium, eco-friendly bamboo products that combine style,
            sustainability, and functionality, enhancing your lifestyle while minimizing
            environmental impact.
          </p>
        </div>

        <div className="flex flex-col items-center footer-links">
          <h3 className="text-lg font-semibold mb-2 animate-fadeInUp">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-gray-400 animate-subtleFlicker">Home</a></li>
            <li><a href="/aboutus" className="hover:text-gray-400 animate-subtleFlicker">About Us</a></li>
            <li><a href="/lighting" className="hover:text-gray-400 animate-subtleFlicker">Lighting</a></li>
            <li><a href="/decor" className="hover:text-gray-400 animate-subtleFlicker">Decor</a></li>
            <li><a href="/personalcare" className="hover:text-gray-400 animate-subtleFlicker">Personal Care</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2 animate-fadeInUp">Contact Us</h3>
          <p className="text-sm animate-fadeInUp">Butwal, Rupandehi</p>
          <p className="text-sm animate-fadeInUp">9866694392</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com/BambooCraft" className="footer-icon animate-subtleFlicker">
              <FaFacebookF size={20} />
            </a>
            <a href="https://instagram.com/BambooCraft" className="footer-icon animate-subtleFlicker">
              <FaInstagram size={20} />
            </a>
            <a href="https://twitter.com/BambooCraft" className="footer-icon animate-subtleFlicker">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="mt-8 text-center">
        <p className="text-sm animate-fadeInUp">&copy; {new Date().getFullYear()} BAMBOO CRAFT. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
