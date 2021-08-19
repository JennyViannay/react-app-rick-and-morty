import React, { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import Logout from "../Auth/Logout";

const Navbar = () => {
  const authenticated = useContext(AuthContext);

  console.log(authenticated)
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
            <a href="/episodes" className="mx-3 underline">Episodes</a>
            <a href="/courses" className="mx-3 underline">Liste de course</a>
            {
              authenticated.authenticated.auth ? <Logout /> : <a href="/login" className="mx-3 underline">Login</a>
            } 
          </span>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;