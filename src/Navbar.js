import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-green-200 text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">Type90</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link to="/beginner" className="mr-5 hover:text-gray-900">
            Beginner's
          </Link>
          <Link to="/intermediate" className="mr-5 hover:text-gray-900">
            Intermediate
          </Link>
          <Link to="/advance" className="mr-5 hover:text-gray-900">
            Advance
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
