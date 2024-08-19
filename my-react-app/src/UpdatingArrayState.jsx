
import { useState } from "react";

function UpdatingArrayState() {
    const [foods, setFoods] = useState(['Apple']);
    let addFood = () => {
        const newFood = document.getElementById('foodInput').value;
        if (newFood === '')
        {
            document.getElementById('foodInput').placeholder ='You forgot to input a food name!'
            return ;
        }
        document.getElementById('foodInput').value = ''
        setFoods(f => [...f, newFood]);
    }
    let removeFood = (index) => {
        setFoods(
            foods.filter((
                _, i
            ) => i !== index)
        )
    }
    return (
        <>
        <div>
            <h2>List of Food</h2>
            <ul>
                {
                    foods.map((
                        food,
                        index
                    ) => <li key={index}
                        onClick={() => removeFood(index)}
                    >{food}</li>)
                }
            </ul>
            <br />
            <input type="text" id="foodInput" placeholder="Enter food name" />
            <button onClick={addFood}>Add food</button>
        </div>
        </>
    );
}

export default UpdatingArrayState;