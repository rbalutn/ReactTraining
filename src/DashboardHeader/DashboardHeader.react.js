import React from "react";

const DashboardHeader = props => {
  return (
    <div className="row">
      <div className="col-md-4">
        <img src={props.data.logo} alt={props.data.alttext} />
        <h1>Driver Details</h1>
        <div>{props.data.driverName}</div>
      </div>
    </div>
  );
};

export default DashboardHeader;
