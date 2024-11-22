import React from "react";

const fruit = ["apple", "banana", "cherry", "date", "elderberry"];

function ListMap() {
    return (
        <div style={{ textAlign: "left" }}>
            <ul>
                {fruit.map((fruit, index) => {
                    return <li key={index}>{fruit}</li>
                })}
            </ul>
        </div>
    );
}

export default ListMap;