import { useState } from 'react'
import './Demo.css'

export const Demo = ( { title,age }) => {
  const [name,setName] = useState('');
  


  return (
    <div className='color-black'>
        <p>{ title }</p>
        <p>{ age }</p>   
    </div>   
  )    
}
