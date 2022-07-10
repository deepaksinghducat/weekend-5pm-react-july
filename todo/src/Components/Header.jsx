import React, { useRef } from 'react'

function Header(props) {

    const taskRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        let letters = /^[A-Za-z]+$/;

        if(taskRef.current.value.match(letters) !== null && taskRef.current.value.trim().length > 6){
            props.addTask(taskRef.current.value);

            taskRef.current.value = '';

            taskRef.current.style.borderColor="#ced4da";
        }else{
            taskRef.current.style.borderColor="red";
        }
    }

    return (
        <form className="row g-3" onSubmit={submitHandler}>
            <div className="col-auto">
                <label htmlFor="task" className="visually-hidden">Task</label>
                <input ref={taskRef} type="text" className="form-control" id="task"  />
            </div>  
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Add</button>
            </div>
        </form>
    )
}

export default Header