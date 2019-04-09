import React from "react";

const DashBoardGrid = props => {
  return (
    <div>
      <h2>Grid</h2>
      <i className={"fa fa-thumbs-down"} onClick={props.handleChange}>
        Dislike
      </i>
    </div>
  );
};

export default DashBoardGrid;
