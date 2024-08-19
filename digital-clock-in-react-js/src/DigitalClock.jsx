import { useEffect } from "react";
import { useState } from "react";

let DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(
        () => {
            const intervalId = setInterval(
                () => {
                    setTime(new Date());
                }, 1000
            );
            return () => {
                clearInterval(intervalId);
            }
        }, []
    );
    let formatTime = () => {
        let hours = time.getHours(),
            minutes = time.getMinutes(),
            seconds = time.getSeconds(),
            meridiem = hours >= 12 ? 'PM': "AM";
        hours = hours % 12 || 12;
        if (seconds < 10)
            seconds = `0${seconds}`
        return `${hours}: ${minutes}: ${seconds} ${meridiem}`;
    }
    return (
        <>
        <div>
            <div className="clock-container">
                <div className="clock">
                    <span>{formatTime()}</span>
                </div>
            </div>
        </div>
        </>
    );
}

export default DigitalClock;
