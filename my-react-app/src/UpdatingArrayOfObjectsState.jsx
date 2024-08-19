import { useState } from "react";

function UpdatingArrayOfObjectsState() {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');

    let addCar = () => {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel,
        }
        setCars(
            c => [...c, newCar]
        );
        setCarYear(new Date().getFullYear());
        setCarMake('');
        setCarModel('');
    }
    let removeCar = (index) => {
        setCars(
            c => c .filter(
                (_, i) => i !== index
            )
        );
    }
    let yearChange = (e) => {
        setCarYear(e.target.value);
    }
    let makeChange = (e) => {
        setCarMake(e.target.value);
    }
    let modelChange = (e) => {
        setCarModel(e.target.value);
    }
    return (
        <>
            <div>
                <h2>List of Car Objects</h2>
                <ul>
                    {
                        cars.map(
                            (car, index) => <li   
                              key={index}
                              onClick={
                                () => removeCar(index)
                              }
                            >{car.year} {car.make} {car.model}</li>
                        )
                    }
                </ul>
                <input 
                    type="number" 
                    value={carYear}
                    onChange={yearChange}
                />
                <input 
                    type="text" 
                    value={carMake}
                    onChange={makeChange}
                    placeholder="Enter car make"
                />
                <input 
                    type="text" 
                    value={carModel}
                    onChange={modelChange}
                    placeholder="Enter car model" 
                />
                <br />
                <button onClick={addCar}>Add Car</button>
            </div>
        </>
    );
}

export default UpdatingArrayOfObjectsState;