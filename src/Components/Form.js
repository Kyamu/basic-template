import React, { useState } from 'react';


const Form = () => {
    let [name, setName] = useState("");
    let [modified, setmodifiedName] = useState("")

    function formSubmit(e) {
        e.preventDefault()
        setmodifiedName(name.toUpperCase())
    }
    function reset() {
        setName("")
        setmodifiedName("")
    }
    return (
        <div>
            <form onSubmit={formSubmit}>
                <input type='text' placeholder='Enter your name' onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <button>Submit</button>
            </form>
            {
                modified &&
                <p>Modified name: {modified}</p>
            }

            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Form;