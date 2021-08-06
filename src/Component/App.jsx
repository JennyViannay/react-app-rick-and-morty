import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './UI/Navbar';
import Home from './Home/Home';
import ShowCharacter from "./Character/ShowCharacter";
import Episode from "./Episode/Episode";
import EpisodeList from "./Episode/EpisodeList";

const App = () => {
  return (
    <Router>
      <div className="font-mono bg-gradient-to-r from-green-400 to-blue-500">
        <Navbar />
        <div className="">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/show-character/:id" component={ShowCharacter} />
            <Route path="/episodes" component={EpisodeList} />
            <Route path="/episode/:id" component={Episode} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
