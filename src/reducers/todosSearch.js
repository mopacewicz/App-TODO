export const todosSearch = (state = '', action) => {
    switch (action.type) {
        case 'SEARCH_TODOS':
            return action.text;
        default:
            return state
    }
}