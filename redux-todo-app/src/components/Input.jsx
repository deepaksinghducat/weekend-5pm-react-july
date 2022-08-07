import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Input() {

    const [todo, setTodo] = useState('');

    const dispatch = useDispatch();

    const submitHandler = (event) => {
        event.preventDefault();

        if(todo.length > 0) {
            dispatch({type: 'add' , payload: todo})
        }
    }
    return (
        <form className="row g-3" onSubmit={submitHandler}>
            <div className="col-10">
                <input
                    type="text"
                    className="form-control"
                    placeholder='Enter Todo'
                    value={todo} onChange={(e) => setTodo(e.target.value)}
                />
            </div>
            <div className="col-2">
                <button type="submit" className="btn btn-primary mb-3">Add Todo</button>
            </div>
        </form>
    )
}

export default Input