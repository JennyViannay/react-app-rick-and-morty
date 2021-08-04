import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import Character from "./Character.jsx";
import Episode from "./Episode.jsx";
import EpisodeList from "./EpisodeList.jsx";
import LocationList from "./LocationList.jsx";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/show-one/:id" component={Character} />
            <Route path="/episodes" component={EpisodeList} />
            <Route path="/episode/:id" component={Episode} />
            <Route path="/locations" component={LocationList} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
