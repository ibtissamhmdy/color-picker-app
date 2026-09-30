import { useState } from "react";


function ColorPicker(){

  const [color, setColor] = useState("#ffffff");
  const [blur, setBlur] = useState(5);
  const [spacing, setSpacing] = useState(0);

  function handleColorChange(event){
    setColor(event.target.value);
  }

  function handleBlur(event) {
    setBlur(event.target.value);
  }

  function handleSpacing(event) {
    setSpacing(event.target.value);
  }

  return(
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <label htmlFor="color-input">Select a color: 
        <input
          id="color-input"
          type="color"
          value={color}
          onChange={handleColorChange}
        />
        </label>
      <div className="color-display" style={{backgroundColor: color}}>
        <p>selected color: {color}</p>
      </div>
        
      <label htmlFor="blur">Blur:
      <input id="blur" type="range" name="blur" min="0" max="25" value={blur} data-sizing="px"
      onChange={handleBlur}></input>
      </label>
      <label htmlFor="spacing">spacing:
      <input id="spacing" type="range" name="spacing" min="10" max="200" value={spacing} data-sizing="px" 
      onChange={handleSpacing}></input>
      </label>
      <img
        src="/photo.jpg"
        alt="Description of the image"
        style={{ padding: `${spacing}px`, filter: `blur(${blur}px)` ,background:`${color}` }}
      />
    </div>
  );
}
export default ColorPicker;