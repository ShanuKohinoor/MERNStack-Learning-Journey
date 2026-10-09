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






