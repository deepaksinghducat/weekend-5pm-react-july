import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function TodoList() {

    const todos =  useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <div className="card mt-4">
            <ul className="list-group list-group-flush">
                {
                    todos.length > 0 ? todos.map((t, index) =>
                    (
                        <li className="list-group-item" key={index}>{t}
                            <i 
                                className="fa fa-times" 
                                aria-hidden="true" 
                                style={{ float: "right" }} 
                                onClick={() => dispatch({type: 'delete', payload: index})}
                            ></i>
                        </li>
                    )
                    ) : (<li className="list-group-item">No Todo Avaliable</li>)
                }
            </ul>
        </div>
    )
}

export default TodoList