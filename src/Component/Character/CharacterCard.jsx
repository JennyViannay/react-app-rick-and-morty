import React from "react";
import { Link, useParams } from "react-router-dom";

import EpisodeUl from './../Episode/EpisodeUl';

const CharacterCard = props => {
  const params = useParams();

  return (
    <div className="card shadow-lg">
      <img className="object-cover" src={props.character.image} alt="avatar" />
      <div className="card-body">
        <div className="text-2xl font-extrabold mt-4">
          <h5 className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          | {props.character.name}
            </h5>
        </div>
        <p className="card-text">Specie : {props.character.species}</p>
        <p className="card-text">
          Type : {props.character.type ? props.character.type : "unknow"}
        </p>
        <p className="card-text">Status : {props.character.status}</p>
        <p className="card-text">Location : {props.character.location.name}</p>
        <p className="card-text">Origin : {props.character.origin.name}</p>
        <div className="text-center">
          {params.id ? (
            <>
              <EpisodeUl props={props.character.episode} />
              <Link to="/">Return</Link>
            </>
          ) : (
              <Link to={"/show-one/" + props.character.id} className="btn bg-green-400 text-white shadow-md transform hover:scale-110 motion-reduce:transform-none">Show More</Link>
            )}
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
