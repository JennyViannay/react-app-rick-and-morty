import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import AuthContext from "../../Context/AuthContext";


const User = () => {
  const authenticated = useContext(AuthContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (authenticated.authenticated.user) {
      const userId = authenticated.authenticated.user;
      axios.get('http://localhost:5000/api/users/' + userId)
        .then((response) => setUser(response.data))
    }
  }, [authenticated])

  return (
    <div className="container h-screen">
      {authenticated.authenticated.user ? (
          <h2>User Id {authenticated.authenticated.user} : {user.email}</h2>
      ) : 'Not Found'}
    </div>
  );
};

export default User;