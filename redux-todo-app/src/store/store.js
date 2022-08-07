import { createStore } from "redux";

const storeReducer = (state = { todos: [] }, action) => {

    if (action.type === 'add') {
        return {
            todos: [
                ...state.todos,
                action.payload
            ]
        }
    }

    if (action.type === 'delete') {
        state.todos.splice(action.payload, 1);

        return {
            todos: [
                ...state.todos
            ]
        }
    }

    return state
}

const store = createStore(storeReducer);

export default store;
