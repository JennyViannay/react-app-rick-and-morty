import React from "react";
import axios from "axios";
import { useState, useEffect } from "react/cjs/react.development";


const EpisodeList = () => {
  const [episodes, getEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode")
      .then(response => getEpisodes(response.data));
  }, []);
  console.log(episodes)
  return (
    <div>
      {episodes ? (
        <div className="row">
          
        </div>
      ) : (
        <p className="alert alert-warning">Loading data...</p>
      )}
    </div>
  );
};

export default EpisodeList;
