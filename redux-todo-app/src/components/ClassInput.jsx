import React, { Component } from 'react'
import { connect } from 'react-redux'

class ClassInput extends Component {

    constructor() {
        super();
        this.state = {
            todo: ''
        }
    }

    submitHandler = (event) => {
        event.preventDefault();

        if (this.state.todo.length > 0) {
            console.log(this.state.todo);
            this.props.addTodo(this.state.todo)
        }
    }

    render() {
        return (
            <form className="row g-3" onSubmit={this.submitHandler}>
                <div className="col-10">
                    <input
                        type="text"
                        className="form-control"
                        placeholder='Enter Todo'
                        value={this.state.todo} onChange={(e) => this.state.todo = this.setState({todo: e.target.value})}
                    />
                </div>
                <div className="col-2">
                    <button type="submit" className="btn btn-primary mb-3">Add Todo</button>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (todo) => dispatch({ type: 'add', payload: todo })
    }
}

export default connect(null,mapDispatchToProps)(ClassInput)