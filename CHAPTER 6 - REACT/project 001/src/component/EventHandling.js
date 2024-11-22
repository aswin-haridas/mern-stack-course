import React from "react";

function EventHandling() {
    const handleClick = () => {
        console.log('Button Clicked!');
    }
    const handleChange = (event) => {
        console.log('Input value', event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('form submitted');

    }

    return (
        <div>
            <button onClick={handleClick}>click here</button><br />
            <input type="text" onChange={handleChange} placeholder="type smthn" /><br />
            <form onSubmit={handleSubmit}><br />
                <button type="submit">submit</button>
            </form>
        </div>
    )

}

export default EventHandling