import { useState } from "react";

function ColorPicker_Try() {
    const [color, setColor] = useState('#ad0000');
    let updateColor = (e) => {
        setColor(e.target.value);
    }
    return (
        <>
        <div className="color-picker-container">
            <h1><center>Color Picker</center></h1>
            <div 
                className="color-display"
                style={{backgroundColor: color}}
            >
                <p>Selected Color: {color}</p>
            </div>
            <label htmlFor="">Select a Color</label>
            <input type="color" value={color} onChange={updateColor}/>

        </div>
        </>
    );
}

export default ColorPicker_Try