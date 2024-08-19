import { useEffect, useRef, useState } from "react";

let Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    let start = () => {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }
    let stop = () => {
        setIsRunning(false);
    }
    let reset = () => {
        setElapsedTime(0);
        isRunning(false);
    }
    let formatTime = () => {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor(elapsedTime % 1000);

        return `${hours}: ${minutes}: ${seconds}: ${milliseconds}`;
    }

    useEffect(
        () => {
            if (isRunning)
            {
                intervalIdRef.current = setInterval(
                    () => {
                        setElapsedTime(Date.now() - startTimeRef.current);
                    }, 10
                );
                
                return () => {
                    clearInterval(intervalIdRef.current);
                }
            }
        }, [isRunning]
    );

    return (
        <>
        <div className="stopwatch">
            <div className="display">
                {formatTime()}
            </div>
            <div className="controls">
                <button 
                    className="start-button"
                    onClick={start}
                >start</button>
                <button 
                    className="stop-button"
                    onClick={stop}
                >stop</button>
                <button 
                    className="reset-button"
                    onClick={reset}
                >reset</button>
            </div>
        </div>
        </>
    );
}

export default Stopwatch;