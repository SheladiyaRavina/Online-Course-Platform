import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <Link to="/">Course Platform</Link>
        </div>

        {/* Toggle button for mobile view */}
        <button 
          className="text-white md:hidden block focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Links for desktop and mobile */}
        <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className="text-white px-4 py-2 block hover:bg-sky-600 rounded ">Home</Link>
          <Link to="/catalog" className="text-white px-4 py-2 block hover:bg-sky-600 rounded">Course Catalog</Link>
          <Link to="/about" className="text-white px-4 py-2 block hover:bg-sky-600 rounded">About Us</Link>
          <Link to="/contact" className="text-white px-4 py-2 block hover:bg-sky-600 rounded">Contact Us</Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
