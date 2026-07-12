//Q.1


//Given an array of numbers, return a new array with each number doubled using map().
     const arr=[2,4,6,8,10];
     let newArray = arr.map(num=>{
         return (2*num);
     });
     console.log(newArray);


 //Given an array of names, return a new array with each name in uppercase using map().
     const arr1 =["apple","orange","grape"];
     let newArray1 = arr1.map(str=>{
         return str.toUpperCase();
     })
     console.log(newArray1);


 //You have an array of product prices. Use map() to add 18% tax to each.
const products = [
    {name:"Book",price :2},
    {name:"Pen",price:1},
    {name:"Pencil",price:1},
    {name:"Scale",price:1.50}
    ]
    let newArray2= products.map(product=>{
        return (0.18* product.price + product.price);
    })
     console.log(newArray2);



//Q2

    const user={
    name: "Alice",
    greet:function(){
        console.log(this.name);
    },
    arrow:()=>{
        console.log(this.name);
    }
    };
    user.greet();  //Alice
    user.arrow();  //Undefined




  //Q3  

    function Person(name){
    this.name=name;
}
Person.prototype.greet =
function(){
    console.log("Hello" + this.name);
};
const p1 = new Person("Alice");
p1.greet();     //Hello Alice
 
    
    
