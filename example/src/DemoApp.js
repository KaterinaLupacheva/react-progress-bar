import React, { useState, useEffect } from "react";
import CustomizedBar from "./CustomizedBar";
import ProgressBar from "@ramonak/react-progress-bar";
import PointerBar from "./PointerBar";

const DemoApp = () => {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  return (
    <div className="App">
      <h3>Randomly generated completed value</h3>
      <ProgressBar completed={completed} />
      <hr />
      <h3>Interactive Generator</h3>
      <CustomizedBar />
      <h3 style={{ borderTop: "1px black solid", paddingTop: "20px" }}>
        Example of the <i>className</i> prop of the parent <i>div</i> usage
      </h3>
      <p>
        <i>cursor: pointer</i> CSS prop applied
      </p>
      <PointerBar />
    </div>
  );
};

export default DemoApp;
