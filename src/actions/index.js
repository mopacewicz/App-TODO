let nextTodoId = 0
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text

})

export const removeTodo = id => ({
    type: 'REMOVE_TODO',
    id
})

export const completeTodo = id => ({
    type: 'COMPLETE_TODO',
    id
})

export const EditTodo = id => ({
    type: 'EDIT_TODO',
    id
})


export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const searchTodo = (text) => ({
    type: 'SEARCH_TODOS',
    text
});
