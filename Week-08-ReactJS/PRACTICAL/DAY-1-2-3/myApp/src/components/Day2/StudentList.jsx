//                                     Day 2 task 4 
//                         (Display list of students dynamically using map().)  


import { useState } from "react"

import "./StudentList.css"


   function StudentList({students}){
       return(
        <div className="studentListContainer">
            {students.map((student)=>(
                <p key={student.id}>
                    {student.name}-{student.course}
                </p>
            ))}
        </div>
       )
   }


   export default StudentList
