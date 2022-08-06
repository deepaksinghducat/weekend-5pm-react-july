import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react';
import Child from './Child'

function Parent() {
    console.log('parent');

    const [value,setValue] = useState('')

    const click = useCallback(() => {
        console.log('Clicked');
        setValue(Math.random() * 100);
    },[]);

  
  return (
    <div style={{
        textAlign: 'center',
    }}><Child click={click} /></div>
  )
}

export default Parent