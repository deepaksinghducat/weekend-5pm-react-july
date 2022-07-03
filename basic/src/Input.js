import React, { useState } from 'react'

export const Input = () => {
   
  const [list, setList] = useState(['fasf','fasfsdaf'])


  const todo = (e) => {
     e.preventDefault();

     console.log('fasfasf');

     let previouslist = list
      previouslist.push(e.target.value);

     setList(previouslist);


     console.log(list);
  }

  return (
    <div>
        <input type="text" onChange={todo} />
        
        { 
            list.map((item,index) => {
                return (
                    <p key={index}>{item}</p>
                )
            })
        }

    </div>
  )
}
