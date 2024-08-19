import { useState } from "react";

function Counter() {
    const [value, setValue] = useState(0);
    const updateValue = () => {
        setValue(value+1);
    }
    const decreaseValue = () => {
        setValue(value-1);
    }
    const resetValue = () => {
        setValue(0);
    }
    return (
        <>
            <div>
                <p>Value: {value}</p>
                <button onClick={updateValue}>Increase</button>
                <button onClick={decreaseValue}>Decrease</button>
                <button onClick={resetValue}>Reset Value</button>
            </div>
        </>
    );
}

export default Counter