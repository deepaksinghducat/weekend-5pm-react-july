import { useState } from 'react'
import styles  from './Demo.module.css'

export const Demo = ( { title,age }) => {
  const [name,setName] = useState('');

  return (
    <div className={styles.backround}>
        <p>{ title }</p>
        <p>{ age }</p>   
    </div>   
  )    
}
