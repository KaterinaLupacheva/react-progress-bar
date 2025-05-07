import React, { useState, useEffect } from "react";
import CustomizedBar from "./CustomizedBar";
import ProgressBar from "@ramonak/react-progress-bar";

const DemoApp = () => {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCompleted(Math.floor(Math.random() * 100) + 1),
      2000
    );

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h3>Randomly generated completed value</h3>
      <ProgressBar completed={completed} />
      <hr />
      <h3>Interactive Generator</h3>
      <CustomizedBar />
      <div style={{ marginTop: "100px" }}></div>
    </div>
  );
};

export default DemoApp;
