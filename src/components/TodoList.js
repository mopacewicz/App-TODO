import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'

const TodoList = ({todos}) => (
  <ul>
    {todos.map(todo =>
      <Todo
        {...todo}
      />
    )}
  </ul>
)

export default connect(
    state => ({todos: state.todos})
)(TodoList)