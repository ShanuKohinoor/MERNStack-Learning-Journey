//FETCH:-fetch is a built-in JavaScript function used to get data from a server or send data to a server using HTTP (like GET, POST, etc.).
                //It return promise



//Used to get   data from API(Website ) like calling  weather,news etc
//It is an inbuilt js function used to make HTTP request(like GET, POST) to servers(like APIs)

      //what is HTTP request:- it is the message send by the browser(or any client) to a server to ask for something- like a webpage,image,data,or to send some data (like a form)


      //Syntax

fetch(url)
  .then(response => response.json())      // convert response to JSON
  .then(data => console.log(data))        // log the data
  .catch(error => console.error(error));  // handle any errors

//GET REQUEST:-

//fetch(...) sends a request to the server.

//Then the  server sends a response back.
             //what is response??:-When you call fetch(), it returns a Promise that resolves to a Response object.



//response.json() helps to turn that response into usable JSON.

//Use.then() to handle the JSON data.

//If there’s an error, .catch() will run.



//TO SEND DATA TO SERVER,use method: POST:-
// Eg:-



//CAN ALSO USE WITH ASYNCH,AWAIT:-

async function getPost() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getPost();






