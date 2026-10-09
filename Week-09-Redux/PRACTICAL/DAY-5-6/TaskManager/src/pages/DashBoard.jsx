
import { useSelector,useDispatch } from "react-redux"
import { logout } from "../features/auth/authSlice"
import { useNavigate } from "react-router-dom"
import TaskForm from "../components/TaskForm"
import TaskList from "../components/TaskList"
import { setSearch,setFilter,removeTask,updateToggle } from "../features/task/taskSlice"
import { useEffect } from "react"

import { fetchTasks } from "../features/task/taskSlice"


export default function Dashboard(){
    const user= useSelector((state)=>state.auth.user)
    const {tasks,search,filter,loading,error} = useSelector((state)=>state.task)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout =  ()=>{
        dispatch(logout())
        navigate('/login')
    }

    const filteredTask = tasks
      .filter((task)=> task.todo.toLowerCase().includes(search.toLowerCase()))
      .filter((task)=>{
        if(filter === 'all') return true;
        if(filter === 'completed') return task.completed;
        if(filter === 'pending') return !task.completed;
        return true;
      })

      useEffect(()=>{
         dispatch(fetchTasks())
      },[dispatch])

      if(loading) return <p>{loading}</p>
      if(error) return <p>{error}</p>





    return(
        <>
        <h2>Welcome {user?.name}</h2>
        <button onClick={handleLogout}>Logout</button>
        <input type="search" value={search} onChange={(e)=>dispatch(setSearch(e.target.value))}/>
        <select type="text" value={filter} onChange={(e)=>dispatch(setFilter(e.target.value))}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
        </select>
         
        <TaskForm/>
         {filteredTask.map((task)=>(
            <div key={task.id}>
                <TaskList task={task}/>
                <button onClick={()=>dispatch(updateToggle(task.id))}>{task.completed? 'pending' : 'completed'}</button>
                <button onClick={()=>dispatch(removeTask(task.id))}>Delete</button>
            </div>
         ))}

        </>
    )
}