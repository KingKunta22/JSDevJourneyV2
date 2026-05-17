import React, {useState} from 'react';

function MyComponent2() {

    const [name, setName] = useState("Guest")
    function handleNameChange(event) {
        setName(event.target.value);
    }

    return (
        <>
            <input type="text" value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>
        </>
    )
}

export default MyComponent2