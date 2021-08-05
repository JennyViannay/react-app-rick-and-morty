import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Episode = () => {
  const params = useParams();
  const [episode, getEpisode] = useState();

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode/" + params.id)
      .then(response => getEpisode(response.data));
  }, []);
  return (
    <div>
      {episode ? (
        <div className="row">
          <h2>{episode.name}</h2>
          <p>{episode.air_date}</p>
          <p>{episode.episode}</p>
        </div>
      ) : (
        <p className="alert alert-warning">Loading data...</p>
      )}
    </div>
  );
};

export default Episode;