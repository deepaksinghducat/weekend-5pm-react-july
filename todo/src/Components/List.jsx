import React, { Fragment } from 'react'

function List(props) {

    const deleteTask = (index) => {
        props.deleteTask(index)
    }

  return (
    <Fragment>
        {
            props.task.length > 0 ? props.task.map((item,index) => (
                <p key={index} onClick={(event) => deleteTask(index) }>{item}</p>
            )): (
                <p>NO Task For the day</p>
            )
        }
    </Fragment>
  )
}

export default List