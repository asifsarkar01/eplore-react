import { useState } from "react";

export default function Team () {
    const [Team , setTeam] =useState(11);
    const teamSTyle  ={
        border: '2px solid purple',
        margin: '15px',
        borderRadius : '18px',
        padding : '16px'

    }
    const handleClick = () =>{
      const addNew = Team+1
      setTeam(addNew)
    }
    const handleClick2 = () => {
        const minusNew = Team -1 ;
        setTeam(minusNew)
    }

    return (
        <div style={teamSTyle}>
            <h3>Players : {Team} </h3>
            <button onClick={handleClick}>Click me+1</button>
            <button onClick={handleClick2}>Click me-2</button>
        </div>
    )
}