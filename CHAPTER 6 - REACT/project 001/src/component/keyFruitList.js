import React, { useState } from "react";

function FruitList() {
    const [fruits, setFruits] = useState(["apple", "banana"]);
    const [newFruit, setNewFruit] = useState("");

    const addFruit = () => {
        if (newFruit.trim()) {
            setFruits([...fruits, newFruit]);
            setNewFruit('');
        }
    }

    const removeFruit = (fruitToRemove) => {
        setFruits(fruits.filter(fruit => fruit !== fruitToRemove));
    }

    return (
        <div>
            <h1>Fruit List</h1>
            <input type="text" value={newFruit} onChange={(e) => setNewFruit(e.target.value)} />
            <button onClick={addFruit}>Add Fruit</button>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>
                        {fruit}
                        <button onClick={() => removeFruit(fruit)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );


}

export default FruitList