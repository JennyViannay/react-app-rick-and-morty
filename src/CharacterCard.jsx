import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import EpisodeUl from './EpisodeUl.jsx';

const CharacterCard = props => {
  const params = useParams();
  
  return (
    <div className="card">
      <img className="card-img-top" src={props.character.image} alt="avatar" />
      <div className="card-body">
        <h5 className="card-title">{props.character.name}</h5>
        <p className="card-text">Specie : {props.character.species}</p>
        <p className="card-text">
          Type : {props.character.type ? props.character.type : "unknow"}
        </p>
        <p className="card-text">Status : {props.character.status}</p>
        <p className="card-text">Location : {props.character.location.name}</p>
        <p className="card-text">Origin : {props.character.origin.name}</p>
        {params.id ? (
          <>
          <EpisodeUl props={props.character.episode} />
          <Link to="/">Return</Link>
          </>
        ) : (
          <Link to={"/show-one/" + props.character.id}>Show More</Link>
        )}
      </div>
    </div>
  );
};

export default CharacterCard;
