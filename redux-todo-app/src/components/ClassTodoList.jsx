import React, { Component } from 'react'
import { connect } from 'react-redux'

class ClassTodoList extends Component {
    render() {
        return (
            <div className="card mt-4">
                <ul className="list-group list-group-flush">
                    {
                        this.props.todos.length > 0 ? this.props.todos.map((t, index) =>
                        (
                            <li className="list-group-item" key={index}>{t}
                                <i
                                    className="fa fa-times"
                                    aria-hidden="true"
                                    style={{ float: "right" }}  
                                    onClick={() => this.props.deleteTodo(index)}                                 
                                ></i>
                            </li>
                        )
                        ) : (<li className="list-group-item">No Todo Avaliable</li>)
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos : state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteTodo: (index) => dispatch({type: 'delete', payload: index}) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ClassTodoList);
