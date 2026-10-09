import { useState } from "react";
import './TaskManager.css'

const initialTasks = [
  {
    id: 1,
    title: 'Wake up early in the morning',
    completed: true
  },
  {
    id: 2,
    title: 'Brush teeth and get ready',
    completed: true
  },
  {
    id: 3,
    title: 'Go for a morning walk',
    completed: false
  },
  {
    id: 4,
    title: 'Cook food and get ready kids to school',
    completed: false
  },
  {
    id: 5,
    title: 'Start learning Redux basics',
    completed: false
  },
  {
    id: 6,
    title: 'Watch React recorded videos for 1 hr',
    completed: false
  },
  {
    id: 7,
    title: "Sleep on time",
    completed: false
  }
];

export default function TaskManager(){

     const [input,setInput] = useState('')

    const [tasks,setTasks] = useState(initialTasks)
    // const [add,setAdd]


    const addTask = ()=>{

        const newTask={
            id: Date.now(),
            title: input,
            completed: false
        }
        setTasks(prev=>[...prev,newTask])

    }

    const toggleTask=(id)=>{
        setTasks(prev=>prev.map((task)=>task.id === id ? {...task,completed: !task.completed} : task))
    }

    const deleteTask=(id)=>{
        setTasks(prev=>prev.filter(task=>task.id !== id))
    }
  return(
        <>
            <input type="text" placeholder="enter a tsk" value={input} onChange={(e)=>setInput(e.target.value)}/>          
            <button onClick={addTask}>Add Task</button>
            <div className="task-container">

            {tasks.length===0 ? <p>Task is empty</p>:
            
            tasks.map((task)=>(
                <div key={task.id} className="task-card">
                    <p>{task.id}</p>
                    <p>{task.title}</p>
                    <p>Status:{task.completed ? 'completed' : 'pending'}</p>
                    <button onClick={()=>toggleTask(task.id)}>{task.completed ? '✔' : '❌'}</button>
                    <button onClick={()=>deleteTask(task.id)}>Delete</button>
                </div>
          ))}

            </div>
        </>
  )
}