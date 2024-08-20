import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";



const Forum = () => {
  return (
    <div className="flex">
      <Sidebar />
      {/* Your main content goes here */}
      <div className="flex-1 p-10">
        {/* Replace this with your content */}
        <h1 className="text-3xl">Forum Content</h1>
      </div>
    </div>
  );
};

export default Forum;
