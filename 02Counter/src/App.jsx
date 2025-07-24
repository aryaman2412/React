import { useState } from 'react'


function App() {
  let [count, setCount] = useState(15)

  const addValue=()=>{
    if(count<20)setCount(count+1)
  }
  const SubValue=()=>{
    if(count>0)setCount(count-1)
  }

  return (
    <>
    <h1>{count}</h1>
    <button onClick={addValue}>Addvalue{count}</button>
    <button onClick={SubValue}>Subvalue{count}</button>
     
    </>
  )
}

export default App
