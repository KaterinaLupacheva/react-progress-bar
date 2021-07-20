import * as React from "react";
import * as PropTypes from "prop-types";

export type ProgressBarProps = {
  completed: string | number;
  bgColor?: string;
  baseBgColor?: string;
  height?: string;
  width?: string;
  borderRadius?: string;
  margin?: string;
  padding?: string;
  labelAlignment?: "left" | "center" | "right" | "outside";
  labelColor?: string;
  labelSize?: string;
  isLabelVisible?: boolean;
  transitionDuration?: string;
  transitionTimingFunction?:
    | "ease"
    | "linear"
    | "ease-in"
    | "ease-out"
    | "ease-in-out";
  className?: string;
  dir?: "ltr" | "rtl" | "auto";
  ariaValuemin?: number;
  ariaValuemax?: number;
  ariaValuetext?: number | null;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  bgColor,
  completed,
  baseBgColor,
  height,
  width,
  margin,
  padding,
  borderRadius,
  labelAlignment,
  labelColor,
  labelSize,
  isLabelVisible,
  transitionDuration,
  transitionTimingFunction,
  className,
  dir,
  ariaValuemin,
  ariaValuemax,
  ariaValuetext,
}) => {
  const getAlignment = (
    alignmentOption: ProgressBarProps["labelAlignment"]
  ) => {
    if (alignmentOption === "left") {
      return "flex-start";
    } else if (alignmentOption === "center") {
      return "center";
    } else if (alignmentOption === "right") {
      return "flex-end";
    } else {
      return null;
    }
  };

  const alignment = getAlignment(labelAlignment);

  const containerStyles: React.CSSProperties = {
    height: height,
    backgroundColor: baseBgColor,
    borderRadius: borderRadius,
    padding: padding,
    width: width,
    margin: margin,
  };

  const fillerStyles: React.CSSProperties = {
    height: height,
    width: Number(completed) > 100 ? `100%` : `${Number(completed)}%`,
    backgroundColor: bgColor,
    transition: `width ${transitionDuration || "1s"} ${
      transitionTimingFunction || "ease-in-out"
    }`,
    borderRadius: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent:
      labelAlignment !== "outside" && alignment ? alignment : "normal",
  };

  const labelStyles: React.CSSProperties = {
    padding: labelAlignment === "outside" ? "0 0 0 5px" : "5px",
    color: labelColor,
    fontWeight: "bold",
    fontSize: labelSize,
    display: !isLabelVisible ? "none" : "initial",
  };

  const outsideStyles = {
    display: labelAlignment === "outside" ? "flex" : "initial",
    alignItems: labelAlignment === "outside" ? "center" : "initial",
  };

  const completedStr =
    typeof completed === "number" ? `${completed}%` : `${completed}`;
  return (
    <div
      style={outsideStyles}
      className={className}
      dir={dir}
      role="progressbar"
      aria-valuenow={parseFloat(completedStr)}
      aria-valuemin={ariaValuemin}
      aria-valuemax={ariaValuemax}
      aria-valuetext={`${
        ariaValuetext === null ? completedStr : ariaValuetext
      }`}
    >
      <div style={containerStyles}>
        <div style={fillerStyles}>
          {labelAlignment !== "outside" && (
            <span style={labelStyles}>{completedStr}</span>
          )}
        </div>
      </div>
      {labelAlignment === "outside" && (
        <span style={labelStyles}>{completedStr}</span>
      )}
    </div>
  );
};

ProgressBar.propTypes = {
  completed: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  bgColor: PropTypes.string,
  baseBgColor: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  borderRadius: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  labelAlignment: PropTypes.oneOf(["left", "center", "right", "outside"]),
  labelColor: PropTypes.string,
  labelSize: PropTypes.string,
  isLabelVisible: PropTypes.bool,
  className: PropTypes.string,
  dir: PropTypes.oneOf(["rtl", "ltr", "auto"]),
};

ProgressBar.defaultProps = {
  bgColor: "#6a1b9a",
  height: "20px",
  width: "100%",
  borderRadius: "50px",
  labelAlignment: "right",
  baseBgColor: "#e0e0de",
  labelColor: "#fff",
  labelSize: "15px",
  isLabelVisible: true,
  dir: "ltr",
  ariaValuemin: 0,
  ariaValuemax: 100,
  ariaValuetext: null,
};

export default ProgressBar;
