
import PropTypes from 'prop-types';

function List(props) {
    const fruits = props.items;
    if (fruits.length <= 0)
        return (
            <>
                null
            </>
        );
    const category = props.category;
    // key is for adding a uniqueness of each element, otherwise react gives a warning
    const listItems = fruits.map( fruit => <li key={fruit.id}>fruit name: {fruit.name} - calories: <b>{fruit.calories}</b></li>)
    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
    const lowCalFruitsList = lowCalFruits.map(
        fruit => <li key={fruit.id}>Fruit Name: {fruit.name} - <b>{fruit.calories}</b></li>
    )
    const highCalFruits = fruits.filter(
        fruit => fruit.calories >= 100
    )
    const highCalFruitsList = highCalFruits.map(
        fruit => <li key={fruit.id}>{fruit.name} - <b>{fruit.calories}</b></li>
    )
    return (
        <>
            <center>
                <p><b>{props.category}</b></p>
            </center>
            <ul>
                {listItems}
            </ul>
            <hr></hr>
            <b>Low Calorie {category}</b>
            <ol>
                {lowCalFruitsList}
            </ol>
            <hr></hr>
            <b>High Calorie {category}</b>
            <ol>
                {highCalFruitsList}
            </ol>
        </>
    );
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number,
                name: PropTypes.string,
                calories: PropTypes.number
            }
        )
    )
}

List.defaultProps = {
    category: "Category",
    items: []
}

export default List;