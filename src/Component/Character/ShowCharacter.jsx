import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

import EpisodeUl from '../Episode/EpisodeUl';

const ShowCharacter = () => {
    const params = useParams();
    const [character, getCharacter] = useState();

    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character/" + params.id)
            .then(response => { getCharacter(response.data) })
    }, [params.id]);
    console.log(character)
    return (
        <div className="container">
            {
                character ? (
                    <>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-xs-12">
                                <img src={character.image} alt="" className="mx-auto rounded" />
                            </div>
                            <div className="col-lg-8 col-md-6 col-xs-12">
                                <h1>{character.name}</h1>
                            </div>
                        </div>
                        <div className="row text-center">
                            <EpisodeUl episodes={character.episode} />
                        </div>
                    </>
                ) : 'Loading...'
            }
        </div>
    )
}

export default ShowCharacter;