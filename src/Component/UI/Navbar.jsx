import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar bg-light shadow-xl">
      <div className="container">
        <div className="text-5xl font-extrabold mt-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            <a href="/">Rick & Morty</a>
          </span>
        </div>
        <div className="text-3xl font-extrabold mt-4">
          <span className="bg-clip-text text-blue-500">
            <a href="/episodes">Episodes</a>
          </span>
        </div>
        <div className="text-3xl font-extrabold mt-4">
          <span className="bg-clip-text text-blue-500">
            <a href="/locations">Locations</a>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;