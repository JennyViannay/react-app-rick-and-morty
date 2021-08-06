import React, { useEffect, useState } from "react";
import axios from 'axios';

import EpisodeLi from "./EpisodeLi";

const EpisodeUl = ({ episodes }) => {
  const [episodesArray, getEpisodes] = useState([]);

  useEffect(() => {
    const getInfosEpisodes = () => {
      episodes.forEach(episode => {
        axios.get(episode).then(response => {
          getEpisodes(episodesArray => [...episodesArray, response.data]);
        });
      });
    }
    !window.location.pathname.includes('/episodes') ? getInfosEpisodes() : getEpisodes(episodes)
  }, [episodes]);


  return (
    <div className="row">
      <h6 className="text-center">Episodes List</h6>
      <ul className="list-group">
        {!window.location.pathname.includes('/episodes') ?
          episodesArray.map((episode, key) => {
            return <EpisodeLi episode={episode} key={key}/>
          }) : episodes.map((episode, key) => {
            return <EpisodeLi episode={episode} key={key}/>
          })
        }
      </ul>
    </div>
  );
};

export default EpisodeUl;
