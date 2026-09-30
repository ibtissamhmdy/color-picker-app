import { useState } from "react";


function ColorPicker(){

  const [color, setColor] = useState("#ffffff");

  function handleColorChange(event){
    setColor(event.target.value);
  }

  return(
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{backgroundColor: color}}>
        <p>selected color: {color}</p>
      </div>
        <label htmlFor="color-input">Select a color</label>
        <input
          id="color-input"
          type="color"
          value={color}
          onChange={handleColorChange}
        />
      <input type="range" name="blur" min="0" max="25" data-sizing="px"></input>
    </div>
  );
}
export default ColorPicker;