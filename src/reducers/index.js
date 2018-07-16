import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from "./visibilityFilter";
import {todosSearch} from "./todosSearch";


export default combineReducers({
    todos,
    visibilityFilter,
    todosSearch
})