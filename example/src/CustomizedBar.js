import React, { useState, useRef } from "react";

import Parameters from "./Parameters";
import ProgressBar from "@ramonak/react-progress-bar";
import styles from "./CustomizedBar.module.css";

const CustomizedBar = () => {
  const INITIAL_STATE = {
    completed: 50,
    bgColor: "#6a1b9a",
    height: "20px",
    width: "100%",
    borderRadius: "50px",
    labelAlignment: "right",
    baseBgColor: "#e0e0de",
    labelColor: "#e80909",
    labelSize: "15px",
    margin: "",
    padding: "",
    isLabelVisible: true,
    transitionDuration: "1s",
    transitionTimingFunction: "ease-in-out",
    dir: "ltr",
    maxCompleted: 100,
    customLabel: undefined,
    animateOnRender: false,
  };

  const [state, setState] = useState(INITIAL_STATE);
  const [showCode, setShowCode] = useState(false);
  const [codeValue, setCodeValue] = useState("");
  const [copySuccess, setCopySuccess] = useState("Copy");
  const textAreaRef = useRef(null);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleBgChange = (color) => {
    setState({
      ...state,
      bgColor: color,
    });
  };

  const handleBaseBgChange = (color) => {
    setState({
      ...state,
      baseBgColor: color,
    });
  };

  const handleLabelColorChange = (color) => {
    setState({
      ...state,
      labelColor: color,
    });
  };

  const handleReset = () => {
    setState(INITIAL_STATE);
    setShowCode(false);
  };

  const handleBooleanPropChange = (value, propName) => {
    setState({
      ...state,
      [propName]: value === "true",
    });
  };

  const copyToClipboard = async (e) => {
    try {
      await navigator.clipboard.writeText(textAreaRef.current.value);
      setCopySuccess("Copied!");
    } catch (err) {
      // Fallback for older browsers
      textAreaRef.current.select();
      document.execCommand("copy");
      e.target.focus();
      setCopySuccess("Copied!");
    }
  };

  const generateCode = () => {
    setCopySuccess("Copy");
    setShowCode(true);
    const tempCode = `<ProgressBar 
    completed={${state.completed}}
    ${state.bgColor === "#6a1b9a" ? "" : `bgColor="${state.bgColor}"`}
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
    ${state.isLabelVisible ? "" : `isLabelVisible={false}`}
    ${
      state.baseBgColor === "#e0e0de"
        ? ""
        : `baseBgColor="${state.baseBgColor}"`
    }
    ${state.labelColor === "#fff" ? "" : `labelColor="${state.labelColor}"`}
    ${state.labelSize === "15px" ? "" : `labelSize="${state.labelSize}"`}
    ${state.margin === "" ? "" : `margin="${state.margin}"`}
    ${state.padding === "" ? "" : `padding="${state.padding}"`}
    ${
      state.transitionDuration === "1s"
        ? ""
        : `transitionDuration="${state.transitionDuration}"`
    }
    ${
      state.transitionTimingFunction === "ease-in-out"
        ? ""
        : `transitionTimingFunction="${state.transitionTimingFunction}"`
    }
    ${state.animateOnRender ? `animateOnRender` : ""}
    ${state.dir === "ltr" ? "" : `dir="${state.dir}"`}
    ${state.maxCompleted === 100 ? "" : `maxCompleted={${state.maxCompleted}}`}
    ${state.customLabel ? `customLabel="${state.customLabel}"` : ""}
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
        handleBooleanPropChange={handleBooleanPropChange}
        handleReset={handleReset}
      />
      <button className={styles.resetButton} onClick={handleReset}>
        RESET
      </button>
      <button className={styles.codeButton} onClick={generateCode}>
        Generate Component Code
      </button>
      <div>
        {showCode && (
          <div className={styles.codeArea}>
            <button onClick={copyToClipboard}>{copySuccess}</button>
            <textarea
              ref={textAreaRef}
              value={codeValue}
              onChange={(e) => setCodeValue(e.target.value)}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default CustomizedBar;
