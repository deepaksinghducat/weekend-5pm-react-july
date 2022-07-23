import React, { useContext } from 'react'
import NameContext from '../store/store'

function Input() {

    const n = useContext(NameContext);

    //   return (
    //     <NameContext.Consumer>
    //         {   
    //           (n) =>  
    //             <div onClick={n.click}>{n.name}</div>
    //         }
    //     </NameContext.Consumer>
    //   )

    return (
        <div onClick={n.click}>{n.name}</div>
    )
}

export default Input
