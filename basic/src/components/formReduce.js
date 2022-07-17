export const formReduce = (state, action) => {

    if (action.type == 'add') {

        localStorage.setItem('data', JSON.stringify(action));

        return {
            ...state,
            name: action.data.name,
            email: action.data.email
        }
    }

    return {
        ...state
    }
}