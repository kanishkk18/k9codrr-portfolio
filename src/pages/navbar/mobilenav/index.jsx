import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mx-4">
      <nav className="backdrop-blur-xl bg-[#ffffff] w-full rounded-[30px] opacity-100 absolute left-0 top-3 lg:hidden shadow-lg z-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-[36px] rounded-full bg-black w-[36px]"
                  src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1725783638/Kanishkk/jrvuwuqvlt8ntdlfmhug.png"
                  alt="Logo"
                />
              </div>
            </div>
            <div className="-mr-2 flex items-center lg:hidden sm:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only h-4 w-4">Open main menu</span>
                {isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <Link to="#about" className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                About
              </Link>
              <Link to="/projectpage" className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                Projects
              </Link>
              <Link to="#contact" className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 opacity-100 z-100">
              <Link to="/" className="text-black block px-3 py-2 rounded-md text-base font-bold">
                Home
              </Link>
              <Link to="/projectpage" className="text-black block px-3 py-2 rounded-md text-base font-bold">
                Projects
              </Link>
              <Link to="#about" className="text-black block px-3 py-2 rounded-md text-base font-bold">
                About
              </Link>
              <Link to="#contact" className="text-black block px-3 py-2 rounded-md text-base font-bold">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
