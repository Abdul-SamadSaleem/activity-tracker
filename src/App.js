import React, { useState, useEffect } from "react";
import "./App.css";
import db from "./Firebase";
import Activity from "./Activity";

const App = () => {
  const [activity, setActivity] = useState([]);
  const [activityInput, setActivityInput] = useState("");

  useEffect(() => {
    db.collection("trackings").onSnapshot(snapshot =>
      setActivity(snapshot.docs.map(doc => doc.data().activity))
    );
  }, []);

  const addActivity = () => {
    db.collection("trackings").add({ activity: activityInput });
  };

  return (
    <div className="app">
      <h1 className="app__header">Personal Tracker</h1>
      <div className="app__activity">
        {activity.map(activity => (
          <Activity activity={activity} />
        ))}
      </div>
      <h3 className="container__title">What Did You Do Today?</h3>
      <div className="inputContainer">
        <input
          className="input"
          placeholder="Type in an activity"
          value={activityInput}
          onChange={e => setActivityInput(e.target.value)}
        />
        <button className="submitBtn" onClick={addActivity}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default App;
