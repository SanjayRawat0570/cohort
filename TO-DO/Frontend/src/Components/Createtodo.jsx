import { json } from 'body-parser';
import React from 'react'
export function Createtodo() {
const [title, setTitle] = React.useState("");
const [description, setDescription] = React.useState("");
  return (
    <div>
      <input 
      id = "title"style = {{
        padding : "10px",
        margin : "10px",
        
      }}
        type="text" placeholder="Enter your todo"  onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value);
        }}/><br />
      <input id="desk"
      style = {{
        padding : "10px",
        margin : "10px",
        
      }} type = "text" placeholder = "Enter your description" /><br />
      <button style = {{
        padding : "10px",
        margin : "10px",
        
      }} 
      onclick = {()=>{
        app.use(express.json());
        fetch ('http://localhost:3007/todo', {
            method: "POST",
            body:json.stringify({
                title: title,
                description: description,

            }),
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then (async function(res){
          const json = await res.json();
          alert("Todo added");
          
        })

      }}> add a todo</button>

    </div>
  )
}
export default Createtodo;
