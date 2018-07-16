import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import { removeTodo } from '../actions'
import { completeTodo } from '../actions'

const TodoList = ({todos, removeTodoDispatcher, completeTodoDispatcher, editTodoDispatcher, isEditing}) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        state={
        isEditing=false}
        removeOnClick={() => removeTodoDispatcher(todo.id)}
        completeOnClick={() => completeTodoDispatcher(todo.id)}
        completed={todo.completed}
      />
    )}
  </ul>
)

export default connect(
    state => ({todos: state.todos}),
    dispatch => ({removeTodoDispatcher: id => dispatch(removeTodo(id)),completeTodoDispatcher: id => dispatch(completeTodo(id))})
)(TodoList)