import React, { useState } from "react";

import Parameters from "./Parameters";
import ProgressBar from "@ramonak/react-progress-bar";

const CustomizedBar = () => {
  const INITIAL_STATE = {
    completed: 50
  };

  const [state, setState] = useState(INITIAL_STATE);

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  return (
    <>
      <Parameters handleChange={handleChange} />
      <ProgressBar {...state} />
    </>
  );
};

export default CustomizedBar;
