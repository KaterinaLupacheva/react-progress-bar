import React, { useState, useRef } from "react";

import Parameters from "./Parameters";
import ProgressBar from "@ramonak/react-progress-bar";
import "./customizedBar.styles.scss";

const CustomizedBar = () => {
  const INITIAL_STATE = {
    completed: 50,
    bgcolor: "#6a1b9a",
    height: "20px",
    width: "100%",
    borderRadius: "50px",
    labelAlignment: "right",
    baseBgColor: "#e0e0de",
    labelColor: "#e80909",
    labelSize: "15px",
    margin: "",
    padding: "",
    isLabelVisible: true
  };

  const [state, setState] = useState(INITIAL_STATE);
  const [showCode, setShowCode] = useState(false);
  const [codeValue, setCodeValue] = useState("");
  const [copySuccess, setCopySuccess] = useState("Copy");
  const textAreaRef = useRef(null);

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
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
    setShowCode(false);
  };

  const handleIsLabelVisibleChange = value => {
    setState({
      ...state,
      isLabelVisible: value === 'true'
    })
  }

  const copyToClipboard = e => {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Copied!");
  };

  const generateCode = () => {
    setCopySuccess("Copy");
    setShowCode(true);
    const tempCode = `<ProgressBar 
    completed={${state.completed}}
    ${state.bgcolor === "#6a1b9a" ? "" : `bgcolor="${state.bgcolor}"`}
    ${state.height === "20px" ? "" : `height="${state.height}"`}
    ${state.width === "100%" ? "" : `width="${state.width}"`}
    ${
      state.borderRadius === "50px"
        ? ""
        : `borderRadius="${state.borderRadius}"`
    }
    ${
      state.labelAlignment === "right"
        ? ""
        : `labelAlignment="${state.labelAlignment}"`
    }
    ${state.isLabelVisible ? '' : `isLabelVisible={false}`}
    ${
      state.baseBgColor === "#e0e0de"
        ? ""
        : `baseBgColor="${state.baseBgColor}"`
    }
    ${state.labelColor === "#fff" ? "" : `labelColor="${state.labelColor}"`}
    ${state.labelSize === "15px" ? "" : `labelSize="${state.labelSize}"`}
    ${state.margin === "" ? "" : `margin="${state.margin}"`}
    ${state.padding === "" ? "" : `padding="${state.padding}"`}
    />`;
    const code = tempCode.replace(/^\s*$(?:\r\n?|\n)/gm, "");
    setCodeValue(code);
  };

  return (
    <>
      <ProgressBar {...state} />
      <Parameters
        handleChange={handleChange}
        handleBgChange={handleBgChange}
        handleBaseBgChange={handleBaseBgChange}
        handleLabelColorChange={handleLabelColorChange}
        handleIsLabelVisibleChange={handleIsLabelVisibleChange}
        handleReset={handleReset}
      />
      <button className="reset-button" onClick={handleReset}>
        RESET
      </button>
      <button className="code-button" onClick={generateCode}>
        Generate Component Code
      </button>
      <div>
        {showCode && (
          <div className="code-area">
            <button onClick={copyToClipboard}>{copySuccess}</button>
            <textarea
              ref={textAreaRef}
              value={codeValue}
              onChange={e => setCodeValue(e.target.value)}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default CustomizedBar;
