import React from 'react'

export const Child = (props) => {

    const dummy2 = () => {
        props.dummy();
    }

  return (
    <div><button onClick={dummy2}>
        click me
        </button></div>
  )
}
