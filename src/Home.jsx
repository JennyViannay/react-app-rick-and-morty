import React from "react";
import axios from "axios";
import { useState, useEffect } from "react/cjs/react.development";

import CharacterCard from "./CharacterCard";

const Home = () => {
  const [characters, getCharacters] = useState([]);
  const [infos, getInfos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then(response => {
      getCharacters(response.data.results);
      getInfos(response.data.info);
    });
  }, []);

  const handleChangeNext = () => {
    axios.get(infos.next).then(response => {
      console.log(response.data)
      getCharacters(response.data.results);
      getInfos(response.data.info);
      setPage(parseInt(infos.next.replace('https://rickandmortyapi.com/api/character?page=', '')));
    }, []);
  };

  const handleChangePrev = () => {
    axios.get(infos.prev).then(response => {
      console.log(response.data)
      getCharacters(response.data.results);
      getInfos(response.data.info);
      setPage(parseInt(infos.next.replace('https://rickandmortyapi.com/api/character?page=', '')));
    }, []);
  };

  console.log(characters);
  console.log(infos);

  return (
    <div>
      <div className="text-center">
        <h1>All characters {infos.count}</h1>
        <p>Nb of pages {infos.pages}</p>
        <p>Page Result {page}</p>
        <button onClick={handleChangePrev} className="btn btn-primary m-1">Prev</button>
        <button onClick={handleChangeNext} className="btn btn-primary m-1">Next</button>
      </div>

      {characters ? (
        <div className="row">
          {characters.map((character, key) => {
            return (
              <div className="col-lg-3 col-md-4 col-xs-12 py-3" key={key}>
                <CharacterCard character={character} />
              </div>
            );
          })}
        </div>
      ) : (
        <p className="alert alert-warning">Loading data...</p>
      )}
    </div>
  );
};

export default Home;
