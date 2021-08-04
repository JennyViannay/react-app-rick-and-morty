import React from "react";
import axios from "axios";
import { useState, useEffect } from "react/cjs/react.development";
import { Link } from "react-router-dom";

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
