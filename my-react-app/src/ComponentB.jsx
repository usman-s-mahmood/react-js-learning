import ComponentC from "./ComponentC";

let ComponentB = () => {
    return (
        <>
        <div className="box">
            <h1>ComponentB</h1>
        <ComponentC />
        </div>
        </>
    );
}

export default ComponentB;