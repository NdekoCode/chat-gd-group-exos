<<<<<<< HEAD
import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  useEffect(()=>{
    fetch('http://localhost:8080'//,{mode:'cors',method:'GET'}
    ).
    then(response=>{
      if(response.status===200) return response.json();
    }).then((data)=>console.log(data))
  })

  return (
    <div className="App">
      <button onClick={()=>{
        fetch('http://localhost:8080/message',{mode:'cors',method:'POST'}
        )
      }}>Send to server</button>
=======

import { useState } from "react";
import ChatContainer from "./components/ChatContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ChatContainer />
>>>>>>> 594c2f862507abf5583a01db5dc20a1deeb08704
    </div>
  );
}

export default App;
