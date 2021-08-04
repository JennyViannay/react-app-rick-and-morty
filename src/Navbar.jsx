import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Home</a>
        <a className="navbar-brand" href="/episodes">Episodes</a>
        <a className="navbar-brand" href="/locations">Locations</a>
      </div>
    </nav>
  );
};

export default Navbar;