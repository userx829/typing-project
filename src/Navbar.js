import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference on load
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="bg-yellow-100 dark:bg-gray-800 text-black dark:text-white body-font">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center ">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 dark:text-white mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">
            <img className="h-16 w-16" src="/favicon.ico" alt="Logo" />
          </span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-lg hover:border-b-4">
            Home
          </Link>
          <Link
            to="/beginner"
            className="mr-5 hover:text-lg hover:border-b-4"
          >
            Beginner's
          </Link>
          <Link
            to="/intermediate"
            className="mr-5 hover:text-lg hover:border-b-4"
          >
            Intermediate
          </Link>
          <Link to="/advance" className="mr-5 hover:text-lg hover:border-b-4">
            Advance
          </Link>
        </nav>
        <button
          onClick={toggleDarkMode}
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-600 focus:outline-none"
        >
          {darkMode ? (
            <span role="img" aria-label="sun">
              🌞
            </span>
          ) : (
            <span role="img" aria-label="moon">
              🌙
            </span>
          )}
        </button>
      </div>
      <hr className="border-0-gray-300 my-2" />

    </header>
    
  );
};

export default Navbar;
