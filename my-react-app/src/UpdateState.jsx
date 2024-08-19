
import {useState} from 'react'

function UpdateState() {
    const [car, setCar] = useState(
        {
            year: 2024,
            make: 'Ford',
            model: 'Mustang'
        }
    );

    const updateYear = (e) => {
        // using updater function with spread operator
        setCar(
            c => (
                {
                    ...c,
                    year: e.target.value
                }
            )
        )
        /*
        setCar(
            {
                ...car,
                year: e.target.value
            }
        ); // using spread operator ... to retain the existing values of object
        */
        /*
        setCar(
            {
                year: e.target.value,
                make: car.make,
                model: car.model,
            }
        ); */
    }
    const updateMake = (e) => {
        setCar(
            {
                year: car.year,
                make: e.target.value,
                model: car.model,
            }
        );
    }
    const updateModel = (e) => {
        setCar(
            {
                year: car.year,
                make: car.make,
                model: e.target.value
            }
        )
    }

    return (
        <>
            <div>
                <p>Your favorite car is: {car.year}, {car.make}, {car.model}</p>
                <label htmlFor="">Year</label>
                <input type="number" 
                    value={car.year}
                    onChange={updateYear}
                />
                <br />
                <label htmlFor="">Make</label>
                <input type="text" 
                    value={car.make}
                    onChange={updateMake}
                />
                <br />
                <label htmlFor="">Model</label>
                <input type="text" 
                    value={car.model}
                    onChange={updateModel}
                />
                <br />
            </div>
        </>
    );
}

export default UpdateState;