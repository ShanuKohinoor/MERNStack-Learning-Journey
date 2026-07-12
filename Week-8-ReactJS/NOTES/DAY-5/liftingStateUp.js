//                                      Lifting State Up
//                                     -----------------



// It is moving state from child component to parent component,so multiple components can share it.
//          * If we need same data for 2 components,move state to the common parent

// Use:-
//       * When multiple components need same data.
//       * When components needs to sync state.
//              - Multiple components should always show the same updated data

//  Eg:-
        // function Child1(){
        //     const [count,setCount] = useState(0)
        // }

        // function Child2(){
                                       // If we need same count here too, state is stuck in Child1
        // }


 // For solving this issue,we can use 'Lift State Up'.     
 //          By moving state up to parent and share down via props.
 
 
 // Eg:-  
        // function Parent(){
        //     const [count,setCount] = useState(0)

        //     return(
        //         <>
        //         <Child1  count={count}  setCount={setCount} />
        //         <Child2 count={count} />
        //         </>
        //     )
        // }

 //  Output will be:- 
 //            Parent (count state)
//                    |
//                    |
//                    v
//            Child1 --> updates count
//            Child2 --> displays count        


 //Definition:-  Lifting state up is the process of moving state to a common parent so it can be shared between multiple child components.       