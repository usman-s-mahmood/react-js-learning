// react hooks can only be used in function based react components

import {useState} from "react";

function ReactHook () {
    const [name, setName] = useState('Guest');
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const updateName = () => {
        let new_name = `Jimmy Neutron `;
        setName(new_name);
        console.log(new_name);
    }
    const updateAge = () => {
        setAge(age+1)
    }
    const updateEmp = () => {
        setIsEmployed(!isEmployed);
    }
    return (
        <>
            <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Click Me</button>
            </div>
            <div>
                <p>Age: {age}</p>
                <button onClick={updateAge}>Update Age</button>
            </div>
            <div>
                <p>Is Employed: {isEmployed ? 'Yes': 'No'}</p>
                <button onClick={updateEmp}>Update Employed status</button>
            </div>
        </>
    );
}

export default ReactHook;