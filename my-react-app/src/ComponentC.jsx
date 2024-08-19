import ComponentD from "./ComponentD";

let ComponentC = () => {
    return (
        <>
        <div className="box">
            <h1>ComponentC</h1>
        <ComponentD />
        </div>
        </>
    );
}

export default ComponentC;