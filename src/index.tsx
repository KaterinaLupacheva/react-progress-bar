import * as React from "react";

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
  customLabelStyles?: React.CSSProperties;
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
  maxCompleted?: number;
  customLabel?: string;
  animateOnRender?: boolean;
  barContainerClassName?: string;
  completedClassName?: string;
  labelClassName?: string;
  initCompletedOnAnimation?: string | number;
  isIndeterminate?: boolean;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  bgColor = "#6a1b9a",
  height = "20px",
  width = "100%",
  borderRadius = "50px",
  labelAlignment = "right",
  baseBgColor = "#e0e0de",
  labelColor = "#fff",
  labelSize = "15px",
  isLabelVisible = true,
  dir = "ltr",
  ariaValuemin = 0,
  ariaValuemax = 100,
  ariaValuetext = null,
  maxCompleted = 100,
  animateOnRender = false,
  initCompletedOnAnimation = 0,
  isIndeterminate = false,
  completed,
  margin,
  padding,
  customLabelStyles,
  transitionDuration,
  transitionTimingFunction,
  className,
  customLabel,
  barContainerClassName,
  completedClassName,
  labelClassName,
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

  const initCompletedOnAnimationStr =
    typeof initCompletedOnAnimation === "number"
      ? `${initCompletedOnAnimation}%`
      : initCompletedOnAnimation;

  const getFillerWidth = (
    maxCompletedValue: ProgressBarProps["maxCompleted"],
    completedValue: ProgressBarProps["completed"]
  ) => {
    if (maxCompletedValue) {
      const ratio = Number(completedValue) / maxCompletedValue;
      return ratio > 1 ? "100%" : `${ratio * 100}%`;
    }
    return initCompletedOnAnimationStr;
  };

  const fillerWidth = getFillerWidth(maxCompleted, completed);

  const [initWidth, setInitWidth] = React.useState<string>(
    initCompletedOnAnimationStr
  );

  const containerStyles: React.CSSProperties = {
    height: height,
    background: baseBgColor,
    borderRadius: borderRadius,
    padding: padding,
    width: width,
    margin: margin,
    overflow: "hidden",
  };

  const fillerStyles: React.CSSProperties = {
    height: height,
    width: isIndeterminate ? "100%" : animateOnRender ? initWidth : fillerWidth,
    background: bgColor,
    transition: isIndeterminate
      ? "none"
      : `width ${transitionDuration || "1s"} ${
          transitionTimingFunction || "ease-in-out"
        }`,
    borderRadius: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent:
      labelAlignment !== "outside" && alignment ? alignment : "normal",
    animation: isIndeterminate ? "indeterminate 1.5s infinite linear" : "none",
  };

  const labelStyles: React.CSSProperties = {
    padding: labelAlignment === "outside" ? "0 0 0 5px" : "5px",
    color: labelColor,
    fontWeight: "bold",
    fontSize: labelSize,
    display: !isLabelVisible ? "none" : "initial",
    ...customLabelStyles,
  };

  const outsideStyles = {
    display: labelAlignment === "outside" ? "flex" : "initial",
    alignItems: labelAlignment === "outside" ? "center" : "initial",
  };

  const completedStr =
    typeof completed === "number" ? `${completed}%` : `${completed}`;

  const labelStr = customLabel ? customLabel : completedStr;

  React.useEffect(() => {
    if (animateOnRender && !isIndeterminate) {
      requestAnimationFrame(() => setInitWidth(fillerWidth));
    }
  }, [fillerWidth, animateOnRender, isIndeterminate]);

  return (
    <div
      style={className ? undefined : outsideStyles}
      className={className}
      dir={dir}
      role="progressbar"
      aria-valuenow={isIndeterminate ? undefined : parseFloat(labelStr)}
      aria-valuemin={ariaValuemin}
      aria-valuemax={ariaValuemax}
      aria-valuetext={`${ariaValuetext === null ? labelStr : ariaValuetext}`}
    >
      <div
        style={barContainerClassName ? undefined : containerStyles}
        className={barContainerClassName}
      >
        <div
          style={completedClassName ? undefined : fillerStyles}
          className={completedClassName}
        >
          {labelAlignment !== "outside" && (
            <span
              style={labelClassName ? undefined : labelStyles}
              className={labelClassName}
            >
              {labelStr}
            </span>
          )}
        </div>
      </div>
      {labelAlignment === "outside" && (
        <span
          style={labelClassName ? undefined : labelStyles}
          className={labelClassName}
        >
          {labelStr}
        </span>
      )}
      <style>
        {`
          @keyframes indeterminate {
            0% {
              width: 30%;
              transform: translateX(-50%);
            }
            50% {
              width: 30%;
              transform: translateX(250%);
            }
            100% {
              width: 30%;
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default ProgressBar;
