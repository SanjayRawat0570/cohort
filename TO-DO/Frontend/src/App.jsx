import React from 'react'
import { Createtodo } from './Components/Createtodo'
import { Todos} from './Components/Todos'
function App() {
  const [todos, setTodos] = React.useState([]);
  fetch ('http://localhost:3007/todos')
  .then (async function(res){
    const json = await res.json();
    setTodos(json);
  })
  return (
    <div>
      <Createtodo />
      <Todos 
      todos={[
        {
          title : "sanj",
          description: "rawat",
          completed: false
        }
      ]}/>
    </div>
  )
}

export default App
