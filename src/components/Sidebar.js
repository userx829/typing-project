import React, { useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "./night2.png";

const Sidebar = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Menu icon for smaller screens */}
      <div className="lg:hidden p-4">
        <button onClick={toggleSidebar}>
        <i class="fa-solid fa-arrow-right text-2xl"></i>        </button>
      </div>

      {/* Sidebar */}
      <aside
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className={`fixed lg:static top-0 left-0 h-full w-40 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 text-dark text-center flex flex-col z-50`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-semibold">{title}</h1>
        </div>

        <nav className="mt-6 flex flex-col justify-center">
          <ul>
            {links &&
              links.map((item, index) => (
                <li
                  key={index}
                  className="py-2 px-4 rounded hover:bg-transparent hover:text-lg hover:text-white"
                >
                  <Link to={item.path} className="flex items-center">
                    <span className="ml-3">{item.label}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </aside>

      {/* Overlay to close the sidebar when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
