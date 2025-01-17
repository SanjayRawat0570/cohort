import { useState } from "react"

function App() {
  const [count, setCount] = useState(0);
  return (
   <div>
    <h1>Hi</h1>
    <Hi count={count} setCount={setCount}/>
   </div>
)}
function Hi({count, setCount}){
  function increment(){
    setCount(count + 1)
  }
  return(
    <div>
      <h1>Hello world</h1>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

 export default App
