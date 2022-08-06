import React from 'react'
import { useCallback } from 'react';
import Button from './Button'

function Child(props) {

    console.log('Child');

    const clickMe = () => {
        props.click();
    };

  return (
    <div onClick={clickMe}>Child
        <Button />
    </div>
  )
}

export default React.memo(Child)