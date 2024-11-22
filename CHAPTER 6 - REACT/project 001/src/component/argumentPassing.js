import React from "react";

const ArguementPassing = () => {
    const handleClick = (name) => {
        alert(`Hello ,${name}`);
    }

    return (
        <div>
            <button onClick={() => handleClick('Alice')}>Say Hellio to Alice</button>
            <button onClick={() => handleClick('Bob')}>Say Hello to Bob</button>
        </div>
    );
}

export default ArguementPassing;