
import { useDispatch } from "react-redux"
import { useState } from "react"
import { addTask } from "../features/task/taskSlice"

export default function TaskForm(){
    const [task,setTask] = useState('')

    const dispatch = useDispatch()
    const handleTask = (e)=>{
        
        e.preventDefault()

        const newTask ={
            id: Date.now(),
            todo: task,
            completed: false
        }

        dispatch(addTask(newTask))
        setTask('')
    }

    return(
        <form onSubmit={handleTask}>
           <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
           <button>Add Task</button>
        </form>
    )
}