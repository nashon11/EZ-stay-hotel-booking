import React from 'react';
import { Link } from 'react-router-dom';

const FooterLink = ({ to, label }) => (
  <Link
    to={to}
    className="block text-gray-300 hover:text-emerald-500 transition-colors duration-300"
  >
    {label}
  </Link>
);

const GlobalFooter = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-4 text-emerald-500">
              Company Info
            </h4>
            <FooterLink to="/about-us" label="About Us" />
            <FooterLink to="/" label="Contact" />
            <FooterLink to="/" label="Privacy Policy" />
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-emerald-500">Support</h4>
            <FooterLink to="/" label="FAQs" />
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-emerald-500">
              Newsletter
            </h4>
            <p>Stay updated with our latest trends</p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter email"
                className="p-2 rounded bg-gray-800 text-white placeholder-gray-400"
              />
              <button className="ml-2 px-4 py-2 bg-emerald-500 text-white rounded">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-center mt-10">
          <p className="text-sm">
            Designed with ❤️ by <span className="text-emerald-500">heyitsjeff</span>
          </p>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} EZstay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;
