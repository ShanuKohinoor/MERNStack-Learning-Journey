
// Day 1 
import StudentCard from "./components/Day1/StudentCard";

// Day 2 task 1
import Counter from "./components/Day2/Counter1";

// Day 2 task 2 
import Toggle from "./components/Day2/Toggle";

// Day 2 task 3
import LoginForm from "./components/Day2/LoginForm";

// Day 2 task 4
import StudentList from "./components/Day2/StudentList"

// Day 3
import Products from "./components/Day3/ProductList";




function App() {
  // Day 2 task 4(students should define before return)
  const students=[
    {id: 1, name: 'Shahala', course: 'JavaScript'},
    {id: 2, name: 'Darshana', course: 'Python'},
    {id: 3, name: 'Meera', course:'React'}
   ]


  return (
    <div>
     {/*Day 1 task */}
        <p className="dayTitle">Day-1</p>

      <div className="cardContainer">

          <StudentCard name="Shanu" course="React" batch="2025" />
          <StudentCard name="Ayesha Shafrin" course="JavaScript" batch="2024" />
          <StudentCard name="Sara" course="Node.js" batch="2025" />
      </div>
      
      <hr/>

    {/* Day 2 task 1 */}

      <div>
              <p className="dayTitle">Day-2 Task-1</p>

             <h1>Counter App</h1>
              <Counter/>
      </div>
      
      <hr/>

    {/* Day 2 task 2 */}
      <div>
              <p className="dayTitle">Day-2 Task-2</p>
              <h1>Toggle</h1>
           <Toggle/>
      </div>

    <hr/>
       {/*Day 2 task 3 */}
      <div>
        <p className="dayTitle">Day-2 Task-3</p>
        <h1>Login Form</h1>

        <LoginForm />
      </div>
    
     <hr/>

        {/*Day-2 task 4*/}
        <div>
          
           <p className="dayTitle">Day-2 Task-4</p>
           <h1>Student List (Using map)</h1>
           <StudentList students={students}/>
        </div>

        <hr/>
          
          {/*Day-3 */}
        <div>
           <p className="dayTitle">Day-3 Task</p>

           <Products/>
        </div>


       <hr/>

    </div>
  );
}





export default App;