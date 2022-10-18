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
    </div>
  )
}

export default App
