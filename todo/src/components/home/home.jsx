import React, { useEffect, useState } from 'react'
import './home.css'
import CreateTask  from "../create/create"
import axios from "axios"
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';

function home() {
  const [todo,  setTask] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3000/get")
    .then(result=> setTask(result.data))
    .catch(err => console.log(err))
  },[])

  const  handleEdit = (id)=>{
    axios.put("http://localhost:3000/update/"+id)
    .then(result=> {location.reload()})
    .catch(err => console.log(err))
  }

  const handleDelete = (id)=>{
    axios.delete("http://localhost:3000/delete/"+id)
    .then(result=> {location.reload()})
    .catch(err => console.log(err))
  }
  return (
  <>
    <div className='header'>
        <h2>ToDo List</h2>
        <CreateTask/>
        {
          todo.length === 0?
          <div><h2>no record</h2></div>
          :
          todo.map(todo=>(
            <div className="task">
              <div className="checkbox" onClick={() =>handleEdit(todo._id)}>
                {todo.done ?
                 <BsFillCheckCircleFill className="icon"></BsFillCheckCircleFill>
                  : <BsCircleFill className="icon"/>
                  }
                  
              
              <p className={todo.done ? "line_through":""}>{todo.task}</p> 
              
              </div>
              <div className="">
                <span><BsFillTrashFill className='icon'onClick={()=>handleDelete(todo._id)}/></span>
              </div>
           
             
            </div>
          ))
        }
    </div>
    
   
    </>
  )
}

export default home
