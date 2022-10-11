import { useState } from 'react';

import EdiText from 'react-editext';

import './App.css';
import logo from './images/logo.png'

function App() {

  const [todoList , setTodoList] = useState([]);
  const [newTask , setNewTask] = useState("");
  const [isCompleted , setIsCompleted] = useState(false);

// Add functionality
  const addTask = () =>{
    const task = {
      id: todoList.length === 0 ? 1 :  todoList[todoList.length-1].id + 1,
      taskName: newTask
    }
    setTodoList([...todoList, task]);
  }

  // Delete functionality
  const deleteTask = (id) =>{
      const newTodoList = todoList.filter((task)=>{
        return task.id !== id
      });
      setTodoList(newTodoList);

  } 


  return (
    <div className="App">
      <div>
        <img src ={logo}/>
      </div>
      <div className="input-form">
        <input className="text-input" onChange={(e)=>{setNewTask(e.target.value)}} placeholder="Enter Task..."/>
        <button className="add-btn" onClick={addTask}>ADD TASK</button>
      </div>

      <div className="list">
        {todoList.map((task)=>{
        return (
        <div className = "task">
          {/* <h2 contenteditable={`${isEditing}`}>{task.taskName}</h2> */}
          
          {/* <h2 style={{textDecoration: isCompleted && 'line-through'}}> */}
          <input className='check' type ="checkbox" />
            <EdiText value={task.taskName}/>
          {/* </h2> */}
          
          <div className="btns">
            <button className="delete-btn" onClick={()=>{deleteTask(task.id)}}>DELETE TASK</button>
          </div>
        </div> 
        )
        })}
      </div>
    </div>
  );
}



export default App;
