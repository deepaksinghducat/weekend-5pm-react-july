import React from 'react'
import { useReducer } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { formReduce } from './formReduce';

export const UseEffect = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    let data = localStorage.getItem('data');

    data = JSON.parse(data);

    const [formReducer, dispatchFormReducer] = useReducer(formReduce, {
        name: data.data.name,
        email: data.data.email
    })

    useEffect(() => {

        console.log(formReducer);
       
    }, [formReducer])

    const submitHandler = (event) => {
        event.preventDefault();

        dispatchFormReducer({
            type: 'add', data: {
                name,
                email
            }
        })
    }

    return (
        <form className="container" onSubmit={submitHandler} >
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input
                    value={name}
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input
                    value={email}
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
