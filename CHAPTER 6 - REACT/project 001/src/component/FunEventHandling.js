import React from "react";

function FunctionComponent() {
    function handleClick(){
        alert("button clicked")
    }

    return(
        <button onClick={handleClick}>Click me</button>
    )
}

export default FunctionComponent