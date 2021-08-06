import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import CharacterCard from "../Character/CharacterCard";

const Episode = () => {
  const params = useParams();
  const [episode, getEpisode] = useState();
  const [characters, getCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode/" + params.id)
      .then(response =>
        response.data
      )
      .then(data => {
        getEpisode(data);
        data.characters.forEach(urlCharacter => {
          axios.get(urlCharacter)
            .then(res => {
              getCharacters(characters => [...characters, res.data])
            })
        })
      })
  }, [params.id]);

  return (
    <div className="container mt-5">
      {episode ? (
        <div>
          <div className="row">
            <h1 className="text-xl font-extrabold">{episode.episode} : {episode.name}</h1>
            <p>{episode.air_date}</p>
            <p className="text-xl mt-5">Characters : </p>
          </div>
          <div className="row">
            {characters ? (
              characters.map((character, key) => {
                return (
                  <div className="col-lg-3 col-md-4 col-xs-12 py-2" key={key}>
                    <CharacterCard character={character} />
                  </div>
                );
              })
            ) : (
                <p className="alert alert-warning">Loading data...</p>
              )}
          </div>
        </div>
      ) : (
          <p className="alert alert-warning">Loading data...</p>
        )}
    </div>
  );
};

export default Episode;