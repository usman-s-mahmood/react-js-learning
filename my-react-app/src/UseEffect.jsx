import { useEffect, useState } from "react";

function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect(
        () => {
            document.title = `Count: ${count}`;
        }
    ); /*
    useEffect(
        () => {
            document.title = `Count: ${count}`;
        }, [count]
    ); this will work when ever the value of count variable changes*/
    /*
    useEffect(
        () => {
            document.title = 'My Counter App';
        }, []
    );// this will only cause the change once */
    function addCount() {
        setCount(c => c+1);
    }
    return (
        <>
        <div>
            <p>Count: {count}</p>
            <button
                onClick={addCount}
            >Add</button>
        </div>
        </>
    );
}

export default UseEffect;