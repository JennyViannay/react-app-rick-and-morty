import React from "react";
import EpisodeLi from "./EpisodeLi";

const EpisodeUl = props => {
  return (
    <div className="row">
      <h6 className="text-center">Episodes List</h6>
      <ul className="list-group">
				{props.props.map(episode => {
					return <EpisodeLi props={episode} />
				})}
      </ul>
    </div>
  );
};

export default EpisodeUl;
