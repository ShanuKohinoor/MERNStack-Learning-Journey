

import { memo } from "react"

 function TaskList({task}){
    return(
        <>
         <h1>{task.todo}</h1>
        </>
    )
}


export default memo(TaskList)