import React, { useState } from "react";

function SubmitForm() {
    const [name, setName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted, Name:', name);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>

    )
}

export default SubmitForm;