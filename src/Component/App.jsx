import React, { useState, useMemo, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthContext from "../Context/AuthContext";

import Navbar from './UI/Navbar';
import Footer from './UI/Footer';
import Home from './Home/Home';
// import ShowCharacter from "./Character/ShowCharacter";
// import Episode from "./Episode/Episode";
// import EpisodeList from "./Episode/EpisodeList";
// import Furniture from "./Furniture/Furniture";
import UserCard from "./User/UserCard";

const App = () => {
  const [authenticated, setAuthenticated] = useState({ auth: false, token: null, user: null });
  const providerAuth = useMemo(() => ({ authenticated, setAuthenticated }), [authenticated, setAuthenticated]);

  useEffect(() => {
    if (localStorage) {
      console.log(localStorage)
      setAuthenticated({
        auth: localStorage.getItem('auth'), 
        token: localStorage.getItem('token'),
        user: localStorage.getItem('user'),
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={providerAuth}>
      <Router>
        <div className="font-mono bg-gradient-to-r from-green-400 to-blue-500">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={UserCard} />
            {/* <Route path="/show-character/:id" component={ShowCharacter} />
            <Route path="/episodes" component={EpisodeList} />
            <Route path="/episode/:id" component={Episode} />
            <Route path="/courses" component={Furniture} /> */}
          </Switch>
          <Footer />
        </div>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
