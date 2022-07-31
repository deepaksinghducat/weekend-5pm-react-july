import { useEffect, useState } from "react";

function useCounter() {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        let intervalId = setInterval(() => { 
            setCounter( counter => (counter + 1))
        }, 1000)
        return () => clearInterval(intervalId);
    }, [counter])

    return counter
}

export default useCounter