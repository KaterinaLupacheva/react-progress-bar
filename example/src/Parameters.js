import React, { useState } from "react";
import { ChromePicker } from "react-color";
import useClickOutside from "./useClickOutside.hook";
import "./parameters.styles.scss";

const Parameters = ({ handleChange, handleBgChange }) => {
  const [barColor, setBarColor] = useState("#6a1b9a");
  const { ref, isVisible, setIsVisible } = useClickOutside(false);

  const handleColorChange = color => {
    setBarColor(color.hex);
    handleBgChange(color.hex);
  };

  return (
    <>
      <div className="param">
        <label htmlFor="completed">completed</label>
        <input
          name="completed"
          id="completed"
          type="number"
          placeholder="1-100"
          onChange={handleChange}
        />
      </div>
      <div className="param">
        <button onClick={() => setIsVisible(true)}>Chose Bar Color</button>
        {isVisible && (
          <div ref={ref} style={{ position: "absolute", marginTop: "30px" }}>
            <ChromePicker
              color={barColor}
              onChangeComplete={handleColorChange}
            />
          </div>
        )}
        <input
          value={barColor}
          name="bgcolor"
          type="text"
          onChange={event => {
            handleChange(event);
            setBarColor(event.target.value);
          }}
        />
      </div>
    </>
  );
};

export default Parameters;
