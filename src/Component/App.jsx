import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './UI/Navbar';
import Home from './Home/Home';
import Character from "./Character/Character";
import Episode from "./Episode/Episode";
import EpisodeList from "./Episode/EpisodeList";
import LocationList from "./Location/LocationList";

const App = () => {
  return (
    <Router>
      <div className="font-mono bg-gradient-to-r from-green-400 to-blue-500">
        <Navbar />
        <div className="">
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
