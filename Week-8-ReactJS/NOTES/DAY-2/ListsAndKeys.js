//                           List in React
//                           ------------

//  List is rendering multiple items from an array using .map()
//    Eg:-
//          * students list
//          * products list
//          * menu items


//     Eg:-
//          function FruitsApp(){
//            let fruits = ['Apple','Mango','Banana']
//    
//            return (
//              <ul>
//                 {fruits.map((fruit)=>(
//                  <li>{fruit}</li>    
//                 ))}
//              </ul>
//            )
//          }                      










//                     Key in React
//                     ------------

//  It is the unique identifier in React for each item in a list.

//      - It helps React to identify which item is changed, added, or removed
//      - Without key React will show warning

//         Eg:-
//          function FruitsApp(){
//            let fruits = ['Apple','Mango','Banana']
               
//            return (
//                  <ul>
//                     {fruits.map((fruit,index)=>(
//                       <li key={index}>{fruit}</li> 
//                      ))}
//                  </ul>
//            )
//          }


//    we cant use  index askey always,because in case of list changes,it wont work. So, we can use 'id' write like:-

//       Eg :-
// function FruitsApp() {
//   let fruits = [
//     { id: 1, name: "Apple" },
//     { id: 2, name: "Mango" },
//     { id: 3, name: "Banana" }
//   ];

//   return (
//     <ul>
//       {fruits.map((fruit) => (
//         <li key={fruit.id}>{fruit.name}</li>
//       ))}
//     </ul>
//   );
// }