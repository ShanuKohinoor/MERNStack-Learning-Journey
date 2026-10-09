

import "./StudentCard.css"                   

   function StudentCard(props){
    return(
        <div className="studentCard">
            <h2>Name: {props.name}</h2>
            <p>Course: {props.course}</p>
            <p>Batch: {props.batch}</p>
        </div>
    )
   }

   export default StudentCard