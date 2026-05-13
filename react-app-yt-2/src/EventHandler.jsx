import React, {useState} from 'react'

function EventHandler() {

    const [name, setName] = useState('')

    return(
        <div>
            <input value={name} />
        </div>
    )
}

export default EventHandler