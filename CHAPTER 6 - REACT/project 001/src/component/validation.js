import React, { useState } from "react";

function ValidationSubmitForm() {
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) {
            setError('Name is required');
            return;
        }
        console.log('Form submitted Name: ', name);
        setError('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Submit</button>
        </form>
    );
}

export default ValidationSubmitForm;