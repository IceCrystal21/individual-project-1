import React, { useState } from 'react'
import styles from './CSS_modules/Form.module.css'
const Mod_Form = () => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        email: ""
    });

    return (
        <div>
            <form className={styles.form}>
                <label for="name">Name:</label>
                <input id='name' onChange={(e) => setInput({name: e.target.value, age: input.age, email: input.email})}></input>

                <label for="age">Age:</label>
                <input id='age' onChange={(e) => setInput({name: input.name, age: e.target.value, email: input.email})}></input>

                <label for="email">Email:</label>
                <input id='email' onChange={(e) => setInput({name: input.name, age: input.age, email: e.target.value})}></input>

                <button type='SUBMIT'>Submit</button>
            </form>
        </div>
    )
}

export default Mod_Form;