import React from 'react'
import useCounter from './hooks/use-counter'

function App() {
    
    let counter = useCounter();
    
    return (
        <div>{counter}</div>
    )
}

export default App