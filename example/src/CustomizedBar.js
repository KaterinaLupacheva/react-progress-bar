import React, { useState } from "react";

import Parameters from "./Parameters";
import ProgressBar from "@ramonak/react-progress-bar";

const CustomizedBar = () => {
  const INITIAL_STATE = {
    completed: 50,
    bgcolor: "#6a1b9a",
    height: "20px",
    width: "100%",
    borderRadius: "50px",
    labelAlignment: "right",
    baseBgColor: "#e0e0de",
    labelColor: "#fff",
    labelSize: "15px",
    margin: "",
    padding: ""
  };

  const [state, setState] = useState(INITIAL_STATE);

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]:
        event.target.name === "completed"
          ? parseInt(event.target.value)
          : event.target.value
    });
  };

  const handleBgChange = color => {
    setState({
      ...state,
      bgcolor: color
    });
  };

  const handleBaseBgChange = color => {
    setState({
      ...state,
      baseBgColor: color
    });
  };

  const handleLabelColorChange = color => {
    setState({
      ...state,
      labelColor: color
    });
  };

  const handleReset = () => {
    setState(INITIAL_STATE);
  };

  return (
    <>
      <ProgressBar {...state} />
      <Parameters
        handleChange={handleChange}
        handleBgChange={handleBgChange}
        handleBaseBgChange={handleBaseBgChange}
        handleLabelColorChange={handleLabelColorChange}
        handleReset={handleReset}
      />
    </>
  );
};

export default CustomizedBar;
