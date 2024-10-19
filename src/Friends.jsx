import { useEffect, useState } from 'react'
import './Work.css'
import Friend from './Friend'
export default function Friends () {
    const [friends, setFriends] = useState([])
    useEffect(()=>{
         fetch('https://jsonplaceholder.typicode.com/users')
         .then(res => res.json())
         .then(data => setFriends(data))
    },[])
   return (
    <div className="box">
        <h2>Hello-Friend:{friends.length}</h2>
        {
            friends.map(friend => <Friend friend={friend}></Friend>)
        }
    </div>
   )
}