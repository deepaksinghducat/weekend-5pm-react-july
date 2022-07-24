import React, { useContext, useRef } from 'react'
import { useState } from 'react'
import TodoContext from '../store/store';

export default function Input() {

    const [todo, setTodo] = useState('');

    const inputRef = useRef();

    const todoCtx = useContext(TodoContext);

    const submitHandler = (event) => {
        event.preventDefault();

        if(todo.length > 0) {
            todoCtx.addTodo(todo);
            setTodo('');
        }else{
            inputRef.current.style.borderColor = 'red'
        }
    }

    return (
        <form className="row g-3" onSubmit={submitHandler}>
            <div className="col-10">
                <input ref={inputRef} type="text" className="form-control" placeholder='Enter Todo' value={todo} onChange={(e) => setTodo(e.target.value)} />
            </div>
            <div className="col-2">
                <button type="submit" className="btn btn-primary mb-3">Add Todo</button>
            </div>
        </form>
    )
}
