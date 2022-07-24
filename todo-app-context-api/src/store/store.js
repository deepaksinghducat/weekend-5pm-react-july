import React, { useState } from "react";

const TodoContext = React.createContext({
    todos: [],
    addTodo: () => { },
    deleteTodo: () => { }
})

export const TodoContextProvider = (props) => {

    const todoL = JSON.parse(localStorage.getItem('todos'));

    const [todos, setTodos] = useState([...todoL]);

    const addTodoHandler = (todo) => {
        setTodos([
            ...todos,
            todo
        ]);

        localStorage.setItem('todos', JSON.stringify(todos));
    }

    const deleteTodoHandler = (index) => {
        let totalTodos = todos;

        totalTodos.splice(index, 1);

        setTodos([
            ...totalTodos
        ])

        localStorage.setItem('todos', JSON.stringify(todos));
    }

    const todoList = {
        todos: todos,
        addTodo: addTodoHandler,
        deleteTodo: deleteTodoHandler
    };

    return (
        <TodoContext.Provider value={todoList}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContext;
