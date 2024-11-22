import React from "react";

function ChildComponent(props) {
    const myStyle = {
        backgroundColor: "lightblue", // Change this to your desired color
        padding: "20px",
        borderRadius: "5px",
      };
    return (
        <div style={myStyle}>
            <h2>Profile</h2>
            <p>Name : {props.name}</p>
            <p>age : {props.age}</p>
            <p>job : {props.job}</p>
        </div>
    )
}
export default ChildComponent