import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-zinc-100 text-black py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-6">
        
        {/* Quick Links Section */}
        <div className="mb-8 md:mb-0">
          <h3 className="font-bold text-lg">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="/" className="text-gray-950 hover:text-black transition">Home</a></li>
            <li><a href="/catalog" className="text-gray-950 hover:text-black transition">Catalog</a></li>
            <li><a href="/about" className="text-gray-950 hover:text-black transition">About Us</a></li>
            <li><a href="/contact" className="text-gray-950 hover:text-black transition">Contact Us</a></li>
          </ul>
        </div>
        
        {/* Contact Us Section */}
        <div className="mb-8 md:mb-0">
          <h3 className="font-bold text-lg">Contact Us</h3>
          <p className="mt-4 text-gray-950">Email: <a href="mailto:support@yourwebsite.com" className="hover:text-black transition">support@yourwebsite.com</a></p>
          <p className="text-gray-950">Phone: +1 (555) 123-4567</p>
          <p className="text-gray-950">Address: 1234 Learning St, Education City, USA</p>
        </div>

        {/* Follow Us Section */}
        <div className="mb-8 md:mb-0">
          <h3 className="font-bold text-lg">Follow Us</h3>
          <p className="mt-4 text-gray-950">Stay connected with us on social media for the latest updates.</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-950 hover:text-black transition">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-950 hover:text-black transition">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-950 hover:text-black transition">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-950 hover:text-black transition">
              <FaLinkedin size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-950 hover:text-black transition">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Newsletter Signup Section */}
        <div>
          <h3 className="font-bold text-lg">Newsletter</h3>
          <p className="mt-4 text-gray-950">Sign up for our newsletter to receive updates on new courses and offers.</p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l bg-white-800 text-gray-950 focus:outline-none"
            />
            <button className="bg-gray-500 text-black px-4 py-2 rounded-r hover:bg-red-500 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-10 border-t border-gray-700 pt-6">
        <p className="text-gray-950 text-sm">© {new Date().getFullYear()} YourWebsite. All Rights Reserved.</p>
        <p className="text-gray-950 text-xs mt-2">
          <a href="/terms" className="hover:text-black transition">Terms of Service</a> | 
          <a href="/privacy" className="hover:text-black transition ml-2">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
