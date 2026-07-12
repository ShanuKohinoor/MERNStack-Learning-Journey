//                                    Day 2 task 1
//                             (Create a Counter Application.)

import { useState } from "react";

import './Counter.css'

   function Counter(){
    const [count,setCount] = useState(0);

     return(
        <div>

            <h2 className="valueDisplay">{count}</h2>

            <div className="buttonContainer">
                <button onClick={() => setCount(prev => prev + 1)}>+</button>
                <button onClick={() => setCount(prev => prev - 1)} disabled={count === 0}>-</button>
                <button onClick={()=> setCount(0)}>Reset</button>
            </div>
        </div>
     )
   }

export default Counter