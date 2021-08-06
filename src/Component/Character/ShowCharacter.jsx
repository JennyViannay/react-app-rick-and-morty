import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

import EpisodeUl from '../Episode/EpisodeUl';

const ShowCharacter = () => {
    const params = useParams();
    const [character, getCharacter] = useState();
    const [location, getLocation] = useState();

    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character/" + params.id)
            .then(response => {
                getCharacter(response.data)
                axios.get(response.data.location.url)
                    .then(res => getLocation(res.data));
            })
    }, []);
    console.log(location)
    return (
        <div className="container">
            {
                character && location ? (
                    <>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-xs-12">
                                <img src={character.image} alt="" className="mx-auto rounded" />
                            </div>
                            <div className="col-lg-8 col-md-6 col-xs-12">
                                <h1>{character.name}</h1>
                                <p>Status : {character.status}</p>
                                <p>Specie : {character.species}</p>
                                <p>Type : {character.type ? character.type : "unknow"}</p>
                                <p>Location : {location.name} - {location.type}</p>
                                <p>Dimension : {location.dimension}</p>
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