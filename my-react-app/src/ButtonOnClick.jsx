
function Button() {
    const handleClick = () => console.log('clicked');
    const handleClick2 = (name) => console.log(`stop clicking ${name}`)
    return (
        <>
           <button onClick={() => handleClick2('name')}>Click me</button> 
        </> // use anonymous functions to call parameterized functions
    );
}

export default Button;