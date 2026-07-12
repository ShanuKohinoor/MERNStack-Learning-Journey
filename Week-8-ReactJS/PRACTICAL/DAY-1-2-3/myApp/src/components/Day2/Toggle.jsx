//                                    Day 2 task 2
//                      (Create a Toggle Button (Show/Hide text).)


import { useState } from "react";
import './Toggle.css'



function Toggle(){
    const [show, setShow]  = useState(false)

    return(
        <div>
            <div className="buttonContainer">
                <button onClick={()=>setShow(prev => !prev)}>{show ? 'Hide Text' : 'Show Text' }</button>
            </div>
                {show && <p className="toggleText">Welcome to my Page</p>}                      { /*This is conditional rendering */}

        </div>

    )
}



export default Toggle