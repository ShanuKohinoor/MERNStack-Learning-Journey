//You have a function that tries to access a property age from an object person.

//If person is not defined (or is null), it should throw a custom error saying "Person object is missing!".

//Use a try-catch block to catch this error and log "Error caught:" followed by the error message.

//In the finally block, log "End of check".

//What you need to do:
//Write the function to check person.age.

//Throw the error if person is undefined or null.

//Handle the error with try-catch-finally.


try{
   if(person == null){
    throw new Error("Person object is missing!")
   }
   console.log("Person:",person.age);
}catch(error){
    console.log("Error caught:",error.message);   
}finally{
    console.log("End of check");
    
}
   

