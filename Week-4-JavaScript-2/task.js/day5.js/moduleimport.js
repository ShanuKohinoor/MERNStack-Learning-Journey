// main.js

import { greet } from './moduleexport.js';   // Import the greet function from greet.js


console.log(greet("Shanu"));    // Call the function and print the result


let message = greet("Shanu");
let h2 = document.createElement("h2");
h2.innerText = message;
document.body.appendChild(h2);

                               // Output:- Hi Shanu
