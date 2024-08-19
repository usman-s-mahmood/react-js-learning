import { useContext } from "react";
import { UserContext } from "./ComponentA";

let ComponentD = () => {
    const user = useContext(UserContext);
    return (
        <>
        <div className="box">
            <h1>ComponentD</h1>
            <h3>{`Bye! ${user}`}</h3>
        </div>
        </>
    );
}

export default ComponentD;