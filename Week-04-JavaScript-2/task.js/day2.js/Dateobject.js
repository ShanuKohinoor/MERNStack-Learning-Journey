//DATE OBJECT IN JAVASCRIPT:- To get year, month,hour,minute,second etc. It is used in website
  //We can obtain this by creating date constructor.
  //There are 4 types of constructors.
       //1. Date
       //2. Date(Millisecond)
       //3. Date(dataString)
       //4. Date(Year,Month,Day,Hour,Minute,Second,Millisecond)


       const today = new Date();
       console.log(today);   // 2025-06-08T10:52:29.488Z


       console.log(today.toString());  //  Sun Jun 08 2025 11:55:56 GMT+0100 (British Summer Time)
                                       //To makes the date human-readable,add toString
        




                       const today1 = new Date();


          //For date alone  
          
             console.log(today1.getDate());   //8



          //For month alone  

             console.log(today1.getMonth());   //5

          //To get real month
             console.log(today1.getMonth()+1);    // 6

        //For fullyear alone  

            console.log(today1.getFullYear());  //2025


        //For day of week alone  
            console.log(today1.getDay());   // 0  (That means sunday)



//TO GET FULL DATE(NORMAL WAY):-

         const today2 = new Date();

const day = today2.getDate();
const month = today2.getMonth() + 1;
const year = today2.getFullYear();

console.log(`Date today: ${day}/${month}/${year}`);  //Date today: 8/6/2025




//TO GET TIME

const time = new Date();
const h = time.getHours();
const m  = time.getMinutes();
const s = time.getSeconds();
const ms = time.getMilliseconds();

console.log(`Time: ${h}:${m}:${s}:${ms}`);   //Time: 14:4:0:685


//If we want to get 0 infront of number if it is a single number like 3:9:8...And we want to get it as 03:09:08..we case padstart().
//Padstart is a string method to pad(add) characters to the start of a string until it reaches a specified length.

const h1 = String(time.getHours()).padStart(2,'0');
const m1  = String(time.getMinutes()).padStart(2,'0');
const s1 = String(time.getSeconds()).padStart(2,'0');
const ms1 = String(time.getMilliseconds()).padStart(3,'0');

console.log(`Time: ${h1}:${m1}:${s1}:${ms1}`);  //Time: 14:04:00:685






                        //PRACTISE QUESTIONS



//Get the date 5 days from now and print it in YYYY-MM-DD format.



//WITHOUT '0' infront of month and date

let newDate = new Date();
newDate.setDate(newDate.getDate()+5);
console.log(`Final:${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()}`)

                                                //  OUTPUT:-Final:2025-6-29
 
               //Can write code like this also(will get same result):-
                  //let newDate = new Date();
                  //newDate.setDate(newDate.getDate()+5);
                  //let year = newDate.getFullYear();
                  //let month = newDate.getMonth()+1;
                  //let date = newDate.getDate();

                  //console.log(`Final:${year}-${month}-${date}`)
                                                //  OUTPUT:-Final:2025-6-29(same  output of above...here i elaborated the same code)





//WITH '0' infront of month and date

let newDate1 = new Date();
newDate1.setDate(newDate1.getDate()+5);
let year1 = newDate1.getFullYear();
let month1 = String(newDate1.getMonth()+1).padStart(2,'0');
let date1 = String(newDate1.getDate()).padStart(2,'0');

console.log(`Final:${year1}-${month1}-${date1}`)  
 // OUTPUT:-Final:2025-06-29




                          //Question -2 

//Find the number of days between two dates:
//Example: '2025-06-24' and '2025-07-10'

let d1 = new Date('2025-06-24');
let d2 = new Date('2025-07-10');

let diff = d2-d1;
let days = (diff)/(1000*60*60*24);
console.log(days)            //Output:-   16



            //can also write code like this:-

                  //let d1 = new Date('2025-06-24');
                  //let d2 = new Date('2025-07-10');

                  //let diff = (d2-d1)/(1000*60*60*24);
                  //console.log(diff)
        