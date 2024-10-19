import { useState } from "react"

export default function Counter () {
    const [Count , setCount] = useState(0);

    const handleClick = () => {
        const newCount = Count +1 ;
        setCount(newCount);

    }
    const handleMinus = () => {
        const newCountdown = Count - 1 ;
        setCount(newCountdown);
    }
    return (
        <div style={{border: '2px solid yellow'}}>
            <h1>This is counter ;{Count} </h1>
            <button onClick={handleClick}>Add</button>
             <button onClick={handleMinus}>Reduce</button>
        </div>
    )
}