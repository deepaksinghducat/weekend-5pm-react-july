import React, { Fragment } from 'react'
import { useRef } from 'react'

export default function Referance() {

    const emailRef = useRef();

    const passwordRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        emailRef.current.style.borderColor = "red";

        // console.log(emailRef.current.value);
        // console.log(passwordRef);

    }

    return (
        <Fragment >
            <form className="container" onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className=" form-label">Password</label>
                    <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </Fragment>

    )
}
