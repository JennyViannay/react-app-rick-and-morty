import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const EpisodeLi = props => {
  const [episode, getEpisode] = useState({});

  useEffect(() => {
    axios
      .get(props.props)
      .then(response => getEpisode(response.data));
  }, []);

  return <li className="list-group-item"><Link to={"/episode/" + episode.id}>{episode.name}</Link></li>
};

export default EpisodeLi;
