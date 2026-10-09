//                                fsmodule

//       fs(file system):- To create file,write,rename,update,delete etc.
//              Eg:- to manage file we use fs module
//          a. fs.writeFile()=> 

 //                                                     3 Arguments in fs:-
 //                                                       1. Path 
 //                                                       2. Content
 //                                                       3. Callback(work after fs. which contaims error also)

       fs.writeFile('text.txt','Hello World',(error)=>{
        if(err) throw err
            console.log('File created');
            
       })          

        const fs = require(fs)


  //     b. fs.readFile()=>
  //                                                    3 Arguments here:-
 //                                                       1. Path 
 //                                                       2. encoded,utf8
 //                                                       3. Callback(err,data)

                       
      fs.readFile('')

      if (err) throw err
      console.log(data);




//    c. Append file()=>
//                                                    3 Arguments here:-
 //                                                       1. Path 
 //                                                       2. data
 //                                                       3. Callback




 //  d. fsunlink :- (Delete)

//                                                   2 Arguments here:-
//                                                       1. path
//                                                       2.Call back(err)



//   e. fsexistsync  :- synchronous(sync) and asynchronous  :- To check whether a file is already exist or not






      