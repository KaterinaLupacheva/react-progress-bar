import React from "react";
import PropTypes from "prop-types";

const ProgressBar = props => {
  const {
    bgcolor,
    completed,
    baseBgColor,
    height,
    width,
    margin,
    padding,
    labelAlignment,
    labelColor,
    labelSize
  } = props;

  const getAlignment = labelAlignment => {
    if (labelAlignment === "left") {
      return "flex-start";
    } else if (labelAlignment === "center") {
      return "center";
    } else if (labelAlignment === "right") {
      return "flex-end";
    }
  };

  const alignment = getAlignment(labelAlignment);

  const containerStyles = {
    backgroundColor: baseBgColor,
    borderRadius: 50,
    padding: padding,
    width: width,
    margin: margin
  };

  const fillerStyles = {
    height: height,
    width: `${completed}%`,
    backgroundColor: bgcolor,
    transition: "width 1s ease-in-out",
    borderRadius: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent: alignment
  };

  const labelStyles = {
    padding: 5,
    color: labelColor,
    fontWeight: "bold",
    fontSize: labelSize
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  completed: PropTypes.number.isRequired,
  bgcolor: PropTypes.string,
  baseBgColor: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  labelAlignment: PropTypes.oneOfType(["left", "center", "right"]),
  labelColor: PropTypes.string,
  labelSize: PropTypes.string
};

ProgressBar.defaultProps = {
  bgcolor: "#6a1b9a",
  height: "20px",
  width: "100%",
  labelAlignment: "right",
  baseBgColor: "#e0e0de",
  labelColor: "#fff",
  labelSize: "15px"
};

export default ProgressBar;
