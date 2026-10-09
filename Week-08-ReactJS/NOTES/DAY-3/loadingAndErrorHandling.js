//                     Loading and Error Handling
//                     --------------------------



// When we call API, data wont come instantly. It can have three situations,

//            * 1) Wait for data(loading) :- 'Pease wait'
//            * 2) Error happen :- 'Something went wrong'
//            * 3) Data recieve(success) :- 'Show data'


//                 if (loading) --> show "Loading..."
//                 if (error) --> show "Error"
//                 else --> show data



// Loading:- It is a state that indicates, data is being fetched from API and the app is waiting for the response.


// Error Handling :- It is used to manage failures during API calls & display an appropriate error message to the user



// Eg:- 

// import { useEffect,useState } from "react";

// import axios from 'axios'

//   function Users(){
//     const [data, setData] = useState([])
//     const [loading,setLoading] = useState(true)
//     const [error,setError] = useState(null)

//    useEffect(()=>{
//     axios.get("https://jsonplaceholder.typicode.com/users")
//     .then((res)=>{
//         setData(res.data);
//         setLoading(false)
//     })
//     .catch(()=>{
//         setError(err.message || "Something went wrong");
//         setLoading(false)
//     })
//    },[])
//     if (loading) return <p>Loading...</p>
//     if(error) return <p>{error}</p>


//     return(
//         <div>
//             {data.map((user)=>(
//               <p key= {user.id}>{user.name}</p>
//             ))}
//         </div>
//     )
//   }

