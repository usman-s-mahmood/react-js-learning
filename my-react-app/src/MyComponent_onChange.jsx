
// onChange is an event handler used primarily with form elements like input, textarea, select, radio.
// It triggers a function every time the value of input changes

import { useState } from "react";

function MyComponent() {
    const [name, setName] = useState('Guest');
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState('');
    const [payment, setPayment] = useState('');
    const [shipping, setShipping] = useState('Delivery')

    let handleNameChange = (e) => {
        setName(e.target.value)
    }
    let clearInput = (e) => {
        e.target.value = ''
    }
    let handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    }
    let handleCommentChange = (e) => {
        setComment(e.target.value);
    }
    let updatePayment = (e) => {
        setPayment(e.target.value);
    }
    let updateShipping = (e) => {
        setShipping(e.target.value);
    }
    return (
        <>
            <div>
                <input type="text" value={name} onChange={handleNameChange} onClick={clearInput}/>
                <p>Name: {name}</p>
            </div>
            <div>
                <
                    input type="number" value={quantity} onChange=  {handleQuantityChange}
                />
                <p>Quantity: {quantity}</p>
            </div>
            <div>
                <textarea name="" id="" value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"
                onClick={
                    (e) => {
                        e.target.placeholder = '';
                    }
                }
                ></textarea>
                <p>comment: {comment}</p>
            </div>
            <div>
                <select name="" id="" value={payment} onChange={updatePayment}>
                    <option value="">select an option</option>
                    <option value="visa">visa</option>
                    <option value="master card">master card</option>
                    <option value="Gift Card">Gift Card</option>
                </select>
                <p>Payment: {payment}</p>
            </div>
            <div>
                <label htmlFor="">
                    <input 
                        type="radio" 
                        value="Pick Up" 
                        checked={shipping === 'Pick Up'}
                        onChange={updateShipping}
                    />
                    pick up
                </label>
                <br />
                <label htmlFor="">
                    <input 
                        type="radio" 
                        value="Delivery" 
                        checked={shipping === 'Delivery'}
                        onChange={updateShipping}
                    />
                    delivery
                </label>
                <p>shipping: {shipping}</p>
            </div>
        </>
    );
}

export default MyComponent;