// updater function is a funciton passed as an argument to setState() usually like setYear(year + 1),better practice is setYear(() => do something)
// Allow for updates based on the previous state used with multiple state updates and asynchronous functions good practice to use updater functions

import { useState } from "react";

function UpdaterFunction() {
    const [count, setCount] = useState(0);
    let inc = () => {
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // the above code will only update the value of count once because the value of count is passed same for each function, the below code is using updater function that will increment the previous state
        // setCount(c => c+1);
        // setCount(c => c+1);
        // setCount(c => c+1);
        setCount(c => c + 1);
    }
    let dec = () => {
        setCount(count - 1);
    }
    let reset = () => {
        setCount(c => c - c);
    }
    return (
        <>
            <div>
                <p>Count: {count}</p>
                <button
                    onClick={inc}
                >Increase</button>
                <br />
                <button
                    onClick={dec}
                >decrease</button>
                <br />
                <button
                    onClick={reset}
                >reset</button>
                
            </div>
        </>
    );
}

export default UpdaterFunction;