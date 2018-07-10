import React from 'react'

const Todo = ({ removeOnClick, text }) => (
    <li>
        {text}
        <button onClick={removeOnClick} >
            Delete
        </button>
    </li>
)

export default Todo