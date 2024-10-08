import React, { useState } from 'react'

import './create.css'
import axios from "axios"

function create() {
  const [task , setTask] = useState()
 

  const handleTask = ()=>{
    axios.post("http://localhost:3000/add",{task:task})
    .then(result => {location.reload()})
    .catch(err => console.log(err))
  }

  return (
      <div className="div">
        <input type="text" onChange={(e)=> setTask(e.target.value)}/>
        <button type='button' onClick={handleTask}>add</button>
      </div>
   
    

  )
}

export default create