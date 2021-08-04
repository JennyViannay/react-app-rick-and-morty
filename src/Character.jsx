import React from "react";
import axios from "axios";
import { useState, useEffect } from "react/cjs/react.development";
import { useParams } from "react-router-dom";

import CharacterCard from "./CharacterCard";

const Character = () => {
  const params = useParams();
  
  const [character, getCharacter] = useState();

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/" + params.id)
      .then(response => getCharacter(response.data));
  }, []);

  return (
    <div>
      {character ? (
        <div className="row">
          <CharacterCard character={character} />
        </div>
      ) : (
        <p className="alert alert-warning">Loading data...</p>
      )}
    </div>
  );
};

export default Character;
