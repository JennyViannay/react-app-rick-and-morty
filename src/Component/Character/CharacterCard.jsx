import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  return (
    <>
      <Link to={"/show-character/" + character.id} className="shadow-2xl">
        <div className="card bg-blue-100 hover:bg-white">
          <img className="object-scale-down" src={character.image} alt="avatar" />
          <div className="px-4 pb-5">
            <div className="text-2xl font-extrabold mt-4">
              <h5 className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              | {character.name.length > 15 ? character.name.substring(0,16) + '...' : character.name}
              </h5>
            </div>
            <p className="card-text">Specie : {character.species}</p>
            <p className="card-text">
              Type : {character.type ? (
                character.type.length > 20 ? character.type.substring(0,17) + '...' : character.type
              ): "unknow"}
            </p>
            <p className="card-text">Status : {character.status}</p>
            <p className="card-text">Location : {character.location.name.length > 20 ? character.location.name.substring(0,17) + '...' : character.location.name}</p>
            <p className="card-text">Origin : {character.origin.name.length > 20 ? character.origin.name.substring(0,17) + '...' : character.origin.name}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CharacterCard;
