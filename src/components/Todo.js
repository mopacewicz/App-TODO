import React from 'react'

const Todo = ({ removeOnClick, completeOnClick, text, completed }) => (
    <li style={ {
        textDecoration: completed ? 'line-through' : 'none'
    }}>
        {text}
        <button onClick={removeOnClick} >
            Delete
        </button>
        <button onClick={completeOnClick}>
            {completed ? 'Incomplet':'Complete'}
        </button>

    </li>
)


export default Todo