import React from 'react'

function Button(props) {
  console.log("Button");
  return (
    <div>Button</div>
  )
}

export default React.memo(Button)