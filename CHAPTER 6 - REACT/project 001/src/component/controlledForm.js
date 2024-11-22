import React, { useState } from "react";

function ControlledForm(){
    const [name , setName] = useState('');
    const handleInputChange = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            <form>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => handleInputChange(e)} />
                </label>
            </form>
            <p>your name is {name}</p>
        </div>
    )
}

export default ControlledForm