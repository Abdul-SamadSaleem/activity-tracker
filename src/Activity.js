import React from "react";
import "./Activity.css";

const Activity = ({ activity }) => {
  return (
    <div className="activity">
      <p>
        <b>{activity}</b>
      </p>
    </div>
  );
};

export default Activity;
