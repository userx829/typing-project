import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ title, links }) => {
  return (
    <aside className="w-44 h-screen bg-gray-800 text-white text-center flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>
      <hr className="border-4-gray-300 my-2" />

      <nav className="mt-6 flex flex-col justify-center">
        <ul>
          {links && links.map((item, index) => (
            <li key={index} className="py-2 px-6 hover:bg-white hover:text-black">
              <Link
                to={item.path}
                className="flex items-center"
              >
                <span className="ml-3">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
