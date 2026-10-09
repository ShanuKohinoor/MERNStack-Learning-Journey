import { useSelector,useDispatch } from "react-redux";

import { useEffect } from "react";
import {fetchTask} from '../features/tasks/taskSlice'


export default function TaskManager(){
    const dispatch = useDispatch()
    const {list,loading,error} = useSelector((state)=>state.taskManager)

    useEffect(()=>{
       dispatch(fetchTask())
    },[dispatch])


    if(loading) return <p>Loading...</p>
    if(error) return <p>Error:{error}</p>


    return(
        <>
          <h1>Task Manager</h1>
          {list.map((task)=>(
            <div key={task.id}>
              {task.todo}
            </div>
          ))}
        </>
    )
}