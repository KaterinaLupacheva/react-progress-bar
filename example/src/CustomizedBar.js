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
    margin: '',
    padding: ''
  };

  const [state, setState] = useState(INITIAL_STATE);

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const handleColorChange = color => {
    setState({
        ...state,
        bgcolor: color
    })
  }

  return (
    <>
      <ProgressBar {...state} />
      <Parameters handleChange={handleChange} handleBgChange={handleColorChange} />
    </>
  );
};

export default CustomizedBar;
