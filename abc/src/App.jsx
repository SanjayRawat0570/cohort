import React, { useState } from 'react';
import './App.css';
import Ract, {fragment} from 'react';
function App() {
  const [title, setTitle] = useState('Hello, World!');
  function updateTitle() {
    setTitle('sanjay kumar');
  }
  return (
    <fragment>
      <Header title={title} />
      <Header title ="sanjay thaku" />
      <button onClick={updateTitle}>Update Title</button>
    </fragment>
   
  )
  function Header({title}){
    return <div>
      <h1>{title}</h1>  
    </div>
  }
}
export default App
