//You are given the following list of employees. Each employee has a name, department, and a list of projects. Each project has a name and hours worked.


const employees = [
  {
    name: "John",
    department: "IT",
    projects: [
      { name: "Website", hours: 30 },
      { name: "App", hours: 20 }
    ]
  },
  {
    name: "Sara",
    department: "Marketing",
    projects: [
      { name: "Campaign", hours: 25 },
      { name: "Survey", hours: 10 }
    ]
  },
  {
    name: "Mike",
    department: "IT",
    projects: [
      { name: "Website", hours: 40 },
      { name: "SEO", hours: 15 }
    ]
  }
];

//❓Your Questions:

//Print the total project hours worked by each employee.

employees.forEach(employee=>{
  console.log(employee.name)
});

employees.forEach(employee=>{
  console.log(employee.projects)
});


employees.forEach(employee=>{
  const totalhours= employee.projects.reduce((sum,project)=>sum+project.hours,0);
  console.log(employee.name+":"+totalhours)
});
 
//Create a new array with only the IT department employees, showing their name and total hours.
 


const employeeIT=employees.filter(employee=>employee.department==="IT");
const result = employeeIT.map(employeeIT=>{
 const final = employeeIT.projects.reduce((sum,project)=>sum+project.hours,0);
 return { name: employeeIT.name, totalhours: final}
  
 });
 console.log(result);

// Q.2 
const students = [
  {
    name: "Ayesha",
    class: "10A",
    subjects: [
      { name: "Math", marks: 78 },
      { name: "English", marks: 85 },
    ],
  },
  {
    name: "Bilal",
    class: "10B",
    subjects: [
      { name: "Math", marks: 92 },
      { name: "English", marks: 81 },
    ],
  },
  {
    name: "Fatima",
    class: "10A",
    subjects: [
      { name: "Math", marks: 88 },
      { name: "English", marks: 90 },
    ],
  }
];
//❓Your Tasks:
//Print the total marks scored by each student.
students.forEach(student=>{
  const studentMark= student.subjects.reduce((sum,subject)=>sum+subject.marks,0);
  console.log(student.name +":"+studentMark)
})

//Create a new array with only students from class "10A" showing their name and their total marks.
 const A = students.filter(student => student.class === "10A");

const result1 = A.map(student=>{
 const final1 = student.subjects.reduce((sum,subject)=>sum+subject.marks,0);
  return {name:student.name,totalMarks: final1};
});
console.log(result1);



//Q.3
const students1 = [
  {
    name: "Aisha",
    class: "10A",
    subjects: [
      { name: "Math", marks: 85 },
      { name: "English", marks: 78 },
      { name: "Science", marks: 92 }
    ]
  },
  {
    name: "Rahul",
    class: "10B",
    subjects: [
      { name: "Math", marks: 88 },
      { name: "English", marks: 80 },
      { name: "Science", marks: 75 }
    ]
  },
  {
    name: "Fatima",
    class: "10A",
    subjects: [
      { name: "Math", marks: 90 },
      { name: "English", marks: 85 },
      { name: "Science", marks: 88 }
    ]
  }
];


//🔧 Your Task:
//👉 Create a new array of students from class "10A"
//const average = students1.filter(student=> student.class === "10A");
////const mark= average.map(student=>{
//const averageMark = student.subjects.reduce((average,subject)=>(average+subject)/number of subjects))
//return {name:student.name,averagemarks: averageMark}
//});

//👉 But only include those whose average marks are greater than or equal to 85
//👉 Return their name and average marks


//Q.4
  const orders = [
  {
    customer: "Aisha",
    items: [
      { name: "Apple", price: 2, quantity: 3 },
      { name: "Banana", price: 1, quantity: 5 }
    ]
  },
  {
    customer: "Rahul",
    items: [
      { name: "Orange", price: 1.5, quantity: 4 },
      { name: "Mango", price: 3, quantity: 2 }
    ]
  },
  {
    customer: "Fatima",
    items: [
      { name: "Banana", price: 1, quantity: 6 },
      { name: "Mango", price: 3, quantity: 1 }
    ]
  }
];
          //🔍 Your Task:
//Filter the orders to keep only those customers who bought a Banana.

//Then, for each of those customers, calculate their total bill using forEach.

//Use reduce to calculate the total of all Banana-buyers' bills combined.

//Return an array of objects like:

let bananaCustomer = orders.filter(order=>order.items.some(item=>item.name === "Banana")
);
bananaCustomer.forEach(customer=>{
  let totalAmount = customer.items.reduce((acc,item)=>acc+(item.price * item.quantity),0)
  console.log(totalAmount);
});






  //Q.5 

  const students2 = [
  {
    name: "Aisha",
    subjects: {
      Math: 90,
      English: 80,
      Science: 95
    }
  },
  {
    name: "Rahul",
    subjects: {
      Math: 75,
      English: 85,
      Science: 70
    }
  },
  {
    name: "Fatima",
    subjects: {
      Math: 92,
      English: 89,
      Science: 90
    }
  }
];

// ❓ Your Task:
// Create a new array of students whose average marks are greater than 85.
// Return each student's name and their average marks.

//let newArray = students2.map(student=>{
   //let avrgMark = student.subjects.reduce((acc,subject)=>acc+subject.val,0)
   //let avg = total/3;
   //if (avg>=85){
    //return {name:student.name, mark:avrgMark}
   //}
//});
//console.log(newArray);


//Q.6
const students3 = [
  {
    name: "Ali",
    scores: {
      Math: 92,
      English: 88,
      Science: 79
    }
  },
  {
    name: "Sara",
    scores: {
      Math: 70,
      English: 65,
      Science: 60
    }
  },
  {
    name: "Huda",
    scores: {
      Math: 95,
      English: 90,
      Science: 85
    }
  }
];
//❓ Question:
//👉 Create a new array of students who scored 90 or more in Math.
//👉 Return only their names and Math score.

let result2 = students3.filter(student=>student.scores.Math>=90);
let final= result2.map(student=>(
  {name:student.name, mathmark:student.scores.Math}

));
console.log(final);

//Q.7
const orders1 = [
  {
    customer: "John",
    items: [
      { name: "Apple", quantity: 3 },
      { name: "Banana", quantity: 2 }
    ]
  },
  {
    customer: "Mary",
    items: [
      { name: "Banana", quantity: 5 },
      { name: "Orange", quantity: 1 }
    ]
  },
  {
    customer: "Steve",
    items: [
      { name: "Apple", quantity: 1 }
    ]
  }
]
//Your tasks:

//Use map to create a new array with just the customer names.
let name = orders1.map(order=>{
  return order.customer
});
console.log(name);


//Use forEach to print each customer's name and total number of items they bought (sum of quantities).
orders1.forEach(order=>{
  let totalNumber = order.items.reduce((acc,item)=>acc+item.quantity,0)
  console.log(order.customer+":"+totalNumber)
});

//Use some to check if any customer bought "Orange".
let hasOrange = orders1.some(order=>order.items.some(item=>item.name==="Orange"));
console.log(hasOrange);

//For the first customer's items array, remove the first item using shift and print the updated items.
orders1[0].items.shift();
// console.log(orders1[0].customer+":"+JSON.stringify(orders1[0].items));
   // Output     John:[{"name":"Banana","quantity":2}]


   //Q.8
   const courses = [
  {
    student: "Aisha",
    enrolled: [
      { course: "JavaScript", hours: 30 },
      { course: "HTML", hours: 15 }
    ]
  },
  {
    student: "Bilal",
    enrolled: [
      { course: "CSS", hours: 20 },
      { course: "JavaScript", hours: 25 }
    ]
  },
  {
    student: "Fatima",
    enrolled: [
      { course: "Python", hours: 40 }
    ]
  }
];
//Find all students who have spent more than 40 total hours on courses.Use filter() and reduce().






let result3 = courses.filter(student=>{
  let final = student.enrolled.reduce((acc,course)=>acc+course.hours,0)
  return final>40;
});
result3.forEach(student=>
  console.log(student)
);



//Q.9

const employees1 = [
  {
    name: "Ayesha",
    projects: [
      { title: "Website Redesign", hours: 25 },
      { title: "SEO Optimization", hours: 18 }
    ]
  },
  {
    name: "Imran",
    projects: [
      { title: "Mobile App", hours: 20 },
      { title: "Backend API", hours: 15 }
    ]
  },
  {
    name: "Fatima",
    projects: [
      { title: "Marketing Campaign", hours: 22 },
      { title: "Branding", hours: 21 }
    ]
  }
];
//Find all employees who have spent more than 40 total hours on projects. Use filter() and reduce(). Then use forEach() to print their names.

let final2 = employees1.filter(employee=>{
  let totalhours1 = employee.projects.reduce((acc,title)=>acc+title.hours,0)
  return totalhours1>40;
});
final2.forEach(employee=>console.log(employee.name));




//Q.10
const students4 = [
  {
    name: "Aisha",
    subjects: {
      Math: 90,
      English: 80,
      Science: 95
    }
  },
  {
    name: "Rahul",
    subjects: {
      Math: 75,
      English: 85,
      Science: 70
    }
  },
  {
    name: "Fatima",
    subjects: {
      Math: 92,
      English: 89,
      Science: 90
    }
  }
];

// ❓ Your Task:
// Create a new array of students whose average marks are greater than 85.
 //let newArray = [];
 //students4.forEach(obj=>obj.subjects.reduce(acc,innerobj=> acc+innerobj.mark,0){
//let avg = total/3;
//if (avg>=85){
//newArray.push(name:obj.name, average:avg);
//}
//});
// Return each student's name and their average marks.




//Q.11

const students7 = [
 {
   name: "Alice",
   marks: {
     math: 80,
     science: 75,
     english: 90
   }
 },
 {
   name: "Bob",
   marks: {
     math: 60,
     science: 70,
     english: 85
   }
 },
 {
   name: "Charlie",
   marks: {
     math: 90,
     science: 95,
     english: 88
   }
 }
];
 
//Print the total marks for each student using reduce().
let mark1 = students7.forEach(student=>{
  let total = Object.values(student.marks).reduce((acc,marks)=>acc+marks,0)
  console.log(student.name+":"+total)

});

//Create a new array where each object contains the name and total marks of the student.
 let newArray = students7.map(student=>{
    let total = Object.values(student.marks).reduce((acc,mark)=>acc+mark,0)
    return { name:student.name,totalMarks:total}
 })
 console.log(newArray);
 
const students8 = [
  {
    name: "Aisha",
    class: "10A",
    subjects: [
      { name: "Math", marks: 85 },
      { name: "English", marks: 78 },
      { name: "Science", marks: 92 }
    ]
  },
  {
    name: "Rahul",
    class: "10B",
    subjects: [
      { name: "Math", marks: 88 },
      { name: "English", marks: 80 },
      { name: "Science", marks: 75 }
    ]
  },
  {
    name: "Fatima",
    class: "10A",
    subjects: [
      { name: "Math", marks: 90 },
      { name: "English", marks: 85 },
      { name: "Science", marks: 88 }
    ]
  }
];
 
 
// Your Task:

// Create a new array of students from class "10A"
 
// But only include those whose average marks are greater than or equal to 85
// Return their name and average marks




const students9 = [
  { name: "Ali", scores: { Math: 92, English: 88, Science: 79 } },
  { name: "Sara", scores: { Math: 70, English: 65, Science: 60 } },
  { name: "Huda", scores: { Math: 95, English: 90, Science: 85 } }
];
  //Your task:
//Find the student who has the highest Science score.

let highestScore = students9.filter(student=>{
   Object.values().find(scores=>)



//Return an object with the student's name and their Science score.

