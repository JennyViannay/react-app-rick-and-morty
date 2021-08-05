import React, { useState, useEffect } from "react";
import axios from "axios";

const LocationList = () => {
  const [locations, getLocations] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location")
      .then(response => getLocations(response.data));
  }, []);
  console.log(locations)
  return (
    <div>
      {locations ? (
        <div className="row">
            
        </div>
      ) : (
        <p className="alert alert-warning">Loading data...</p>
      )}
    </div>
  );
};

export default LocationList;