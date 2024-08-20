import { useEffect, useRef, useState } from "react";

let MyComponent_UseRef = () => {
    // let [number, setNumber] = useState(0);
    // const ref = useRef(0);
    const inputRef = useRef(null);

    let handleClick = () => {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = 'red';
        console.log(inputRef.current);
    }

    useEffect(
        () => {
            console.log('component rendered!');
            // console.log(inputRef);
        }
    );
    return (
        <>
        <div>
            <p>Value of number: {}</p>
            <button onClick={handleClick}>Click Me!</button>
            <input type="text" 
                ref={inputRef}
            />
        </div>
        </>
    );
}

export default MyComponent_UseRef;