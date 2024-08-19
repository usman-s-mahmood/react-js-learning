
function Button() {
    // let count = 0;
    // const handleClick = (name) => {
    //     count += 1;
    //     console.log(
    //         `${name} clicked me ${count} times`
    //     );
    // }
    // const handleClick2 = (name) => console.log(`stop clicking ${name}`);
    const handleClick = (e) => {
        e.target.textContent = 'Button is clicked'
    }
    return (
        <>
           <button onDoubleClick={(e) => handleClick(e)}>Click me (Button On Click)</button> 
        </>
    );
}

export default Button;