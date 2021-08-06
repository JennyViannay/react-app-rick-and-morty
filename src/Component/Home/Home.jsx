import React, { useState, useEffect } from "react";
import axios from "axios";

import CharacterCard from "../Character/CharacterCard";
import Pagination from "../UI/Pagination";
import SearchForm from "../Form/SearchForm.jsx";

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

  const searchHandleChange = (e) => {
    getCharacters(characters.filter(character => character.name.toLowerCase().includes(e.target.value)));
  }

  const handleChangeNext = () => {
    axios.get(infos.next).then(response => {
      getCharacters(response.data.results);
      getInfos(response.data.info);
      setPage(page + 1);
    }, []);
  };

  const handleChangePrev = () => {
    axios.get(infos.prev).then(response => {
      getCharacters(response.data.results);
      getInfos(response.data.info);
      setPage(page - 1);
    }, []);
  };

  return (
    <div className="container">
      <div className="row mt-4 p-3">
        <div className="col-lg-3 col-md-4 col-xs-8 m-auto bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative shadow-lg text-center">
          <p>Total characters {infos.count}</p>
          <p>Page : <span className="text-pink-600">{page}</span>/{infos.pages}</p>
          <Pagination infos={infos} page={page} handleChangeNext={handleChangeNext} handleChangePrev={handleChangePrev} />
          <SearchForm searchHandleChange={searchHandleChange} />
        </div>
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

      <div className="row mt-4 p-3">
        <div className="col-lg-3 col-md-4 col-xs-8 m-auto bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative shadow-lg text-center">
          <p>Page : <span className="text-pink-600">{page}</span>/{infos.pages}</p>
          <Pagination infos={infos} page={page} handleChangeNext={handleChangeNext} handleChangePrev={handleChangePrev} />
        </div>
      </div>
    </div>
  );
};

export default Home;
