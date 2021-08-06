import React from "react";
import { Link } from "react-router-dom";

const EpisodeLi = ({episode}) => {
  return <li className="list-group-item text-blue-500"><Link to={"/episode/" + episode.id}>{episode.episode} : {episode.name} - {episode.air_date}</Link></li>
};

export default EpisodeLi;
