import React, { useState, useEffect } from "react";
import axios from "axios";

import CharacterCard from "../Character/CharacterCard.jsx";

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

  console.log(characters)
  return (
    <div className="container">
      <div className="row mt-4 p-3">
        <div className="col-lg-10 col-md-8 col-xs-12"></div>
        <div className="col-lg-2 col-md-4 col-xs-8 m-auto bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative shadow-lg text-center">
          <p>Total characters {infos.count}</p>
          <p>Page : <span className="text-pink-600">{page}</span>/{infos.pages}</p>
          <div className="text-center">
            <div className="inline-flex mt-2">
              {infos.prev === null ?
                <button onClick={handleChangePrev} className="bg-gray-300 text-gray-800 font-bold py-2 px-4 disabled">Prev</button>
                :
                <button onClick={handleChangePrev} className="bg-blue-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4">Prev</button>
              }
              {infos.next === null ?
                <button onClick={handleChangeNext} className="bg-gray-300 text-gray-800 font-bold py-2 px-4 disabled">Next</button>
                :
                <button onClick={handleChangeNext} className="bg-blue-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4">Next</button>
              }
            </div>
            <div className="row">
              <form>
                <div className="form-group">
                  <label htmlFor="search">Search character :</label>
                  <input id="search" type="text" className="form-control"  name="search" onChange={searchHandleChange} />
                </div>
              </form>
            </div>
          </div>
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
    </div>
  );
};

export default Home;
