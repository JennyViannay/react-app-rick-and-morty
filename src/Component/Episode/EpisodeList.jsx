import React, { useState, useEffect } from "react";
import axios from "axios";
import EpisodeUl from "./EpisodeUl";

import Pagination from "../UI/Pagination";
import SearchForm from "../Form/SearchForm.jsx";

const EpisodeList = () => {
  const [episodes, getEpisodes] = useState([]);
  const [infos, getInfos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode")
      .then(response => {
        getEpisodes(response.data.results);
        getInfos(response.data.info);
      });
  }, []);

  const searchHandleChange = (e) => {
    getEpisodes(episodes.filter(episode => episode.name.toLowerCase().includes(e.target.value)));
  }

  const handleChangeNext = () => {
    axios.get(infos.next).then(response => {
      getEpisodes(response.data.results);
      getInfos(response.data.info);
      setPage(page + 1);
    }, []);
  };

  const handleChangePrev = () => {
    axios.get(infos.prev).then(response => {
      getEpisodes(response.data.results);
      getInfos(response.data.info);
      setPage(page - 1);
    }, []);
  };
  
  return (
    <div className="container">
      <div className="row mt-4 p-3">
        <div className="col-lg-3 col-md-4 col-xs-8 m-auto bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative shadow-lg text-center">
          <p>Total episodes {infos.count}</p>
          <p>Page : <span className="text-pink-600">{page}</span>/{infos.pages}</p>
          <Pagination infos={infos} page={page} handleChangeNext={handleChangeNext} handleChangePrev={handleChangePrev} />
          <SearchForm searchHandleChange={searchHandleChange} />
        </div>
      </div>
      <EpisodeUl episodes={episodes} />
    </div>
  );
};

export default EpisodeList;
