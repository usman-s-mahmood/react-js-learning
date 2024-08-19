import { useEffect, useState } from "react";

function UseEffectHeightWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    let handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    useEffect(
        () => {

            window.addEventListener('resize', handleResize);
            console.log('Event listener added!')
            return () => {
                window.removeEventListener('resize', handleResize);
                console.log('Event is removed listener added!')
            }
        }, []
    );
    useEffect(
        () => {
            document.title = `size: ${width} x ${height}`;
        }, [width, height]
    );
    return (
        <>
        <div>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </div>
        </>
    );
}

export default UseEffectHeightWidth;