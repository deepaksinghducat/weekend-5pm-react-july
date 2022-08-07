const redux = require('redux');

const storeReducer = (state = { counter: 0 }, action) => {

    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }


    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }
}

const store = redux.createStore(storeReducer);

const storeSubscribe = () => {
    const currentState = store.getState();

    console.log(currentState);
}

store.subscribe(storeSubscribe);

store.dispatch({ type: 'increment' });

store.dispatch({ type: 'decrement' });