import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "./night.png";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
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

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="dark:bg-white-800 text-white body-font">
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center"
      >
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-white-900 dark:text-white mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl">
              <img className="" src="./navbar.png" alt="Logo" />
            </span>
          </Link>

          {/* Hamburger Icon for Small Screens */}
          <div className="md:hidden">
            <button
              onClick={toggleNav}
              className="text-white-900 dark:text-white focus:outline-none"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>

        {/* Navbar Links */}
        <nav
          className={`${
            isNavOpen ? "flex" : "hidden"
          } md:flex md:ml-auto md:mr-auto flex-col md:flex-row md:items-center text-base justify-center w-full md:w-auto`}
        >
          <Link
            to="/"
            className="mr-5 hover:text-lg hover:border-b-4 py-2 md:py-0"
            onClick={() => setIsNavOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/beginner"
            className="mr-5 hover:text-lg hover:border-b-4 py-2 md:py-0"
            onClick={() => setIsNavOpen(false)}
          >
            Beginner's
          </Link>
          <Link
            to="/intermediate"
            className="mr-5 hover:text-lg hover:border-b-4 py-2 md:py-0"
            onClick={() => setIsNavOpen(false)}
          >
            Intermediate
          </Link>
          <Link
            to="/advance"
            className="mr-5 hover:text-lg hover:border-b-4 py-2 md:py-0"
            onClick={() => setIsNavOpen(false)}
          >
            Advance
          </Link>
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-white-600 focus:outline-none"
          >
            {darkMode ? (
              <span role="img" aria-label="sun">
                <i className="fa-regular fa-sun"></i>
              </span>
            ) : (
              <span role="img" aria-label="moon">
                <i className="fa-regular fa-moon"></i>
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
