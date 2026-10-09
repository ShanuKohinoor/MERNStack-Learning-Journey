//You are given an array of product objects. Each product has a sales object showing units sold in different regions.
const products = [
  {
    name: "Laptop",
    sales: {
      north: 120,
      south: 100,
      east: 90,
      west: 80
    }
  },
  {
    name: "Mobile",
    sales: {
      north: 200,
      south: 150,
      east: 180,
      west: 170
    }
  },
  {
    name: "Tablet",
    sales: {
      north: 90,
      south: 80,
      east: 70,
      west: 60
    }
  }
];



//❓ Your Tasks:
//1)Print the total sales for each product using reduce().
let final = products.forEach(product=>{
    let total =  Object.values(product.sales).reduce((acc,sales)=>acc+sales,0)
    console.log(product.name+":"+total);
})
//2)Create a new array where each object contains the product name and its total sales.

let newArray =products.map(product=>{
    let totalSales = Object.values(product.sales).reduce((acc,sales)=>acc+sales,0)
    return {name:product.name,totalsale:totalSales}
})
console.log(newArray);