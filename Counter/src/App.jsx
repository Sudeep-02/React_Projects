import { useState } from 'react'


import './App.css'

function App() {
  const [count, setCount] = useState(0)
   
  const increment = () => {
    if(count <  20){
      setCount(count+1) 
  }}
  const decrement = () => {
    if(count > 0){
      setCount(count-1) 
  }}

  return (
    <>  
     <h1>Counter : {count} </h1>
     <br/>
     <button onClick={increment}>Add</button>
     <br />
     <button onClick={decrement}>remove</button>
    </>
  )
}

export default App
