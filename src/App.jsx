import './App.css'
import Counter from './counter'
import Friends from './Friends'
import Team from './Team'
import User from './User'

function App() {
   
  return (
    <> 
   
    <User></User>
    <Team></Team>  
    <Counter></Counter>
    <Friends></Friends>
     <h3>React-core concepts-(2)</h3>
       <h1>Hello App</h1>
       <button>Click me</button>
       <button >Click-2</button>

      <button onClick={() =>{alert('button-3 click')}}>Click-3</button>

     
    </>
  )
}

export default App
