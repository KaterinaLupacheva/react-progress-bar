import React, { useState, useEffect } from "react";

import ProgressBar from "@ramonak/react-progress-bar";

const App = () => {
  const [completed, setCompleted] = useState(0);

  // useEffect(() => {
  //   setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  // }, []);

  return (
    <div className="App">
      <ProgressBar completed={"20"} />
    </div>
  );
};

export default App;
