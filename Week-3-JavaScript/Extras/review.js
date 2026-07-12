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
employees.forEach(employee =>{
    let sum = employee.projects.reduce((acc,project)=>acc+project.hours,0)
    console.log(employee.name+ "..."+ sum)
})

let iT = employees.filter(employee =>

   return emp= employees.department = IT

)