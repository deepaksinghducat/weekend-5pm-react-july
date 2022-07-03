import React from 'react'
import { Child } from './Child';

export const Parent = () => {
  
    const dummy = ()  =>{
        console.log('parent component');
    }
  
  return (
    <div>
        <Child dummy={dummy} />
        <Child dummy={dummy} />
        <Child dummy={dummy} />
    </div>
  )
}
