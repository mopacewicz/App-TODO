import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import { removeTodo } from '../actions'

const TodoList = ({todos, removeTodoDispatcher}) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        removeOnClick={() => removeTodoDispatcher(todo.id)}
      />
    )}
  </ul>
)

export default connect(
    state => ({todos: state.todos}),
    dispatch => ({removeTodoDispatcher: id => dispatch(removeTodo(id))})
)(TodoList)