//                     Path Module


// Path module allows to interact with file path easily.
// It has many properties and methods to access and manipulates paths in the file system.
// To handle path, we use path module
// To get exact path,if there is a file inside a folder.
// To find extension.
// To join path
// To full path, file name or folder name etc.



//               1. path.join

// To join multiple files and folder in a single path.

//     Arguments:-
//       1. Folder
//       2. Sub folder
//       3. file


 // Eg:-  
     const path = require('path')
     let result = path.join('folder','subfolder', 'file.txt')
     console.log(result) 
                               //Output:- folder/subfolder/file.txt
                               //      Add slashes automatically, removes extra slashes, and creates a clean path.




//               2. path.resolve

// TO get the absolute path of a file or folder.

         //    path.resolve('data','info.txt')
     
// Eg:-          backend/myfolder/project/data/info.txt

     const path1 = require ('path')

     let result1 = path1.resolve('data', 'info.txt')

     console.log(result1);
     
//                                   Output:- C:\Users\User\Desktop\SHANU EONIX\NodeJS\week5Nodejs\day4.js\data\info.txt





//            3. path.basename

//  Will get file name alone
// To extract only the file name from a full path.
// will get last part of the path.
 // Eg:-
                   const path2 = require('path')
                   let result2 = path2.basename('home/user/photo.jpg')
                   console.log(result2);
//                                             Output:- photo.jpg
                   
//  we can console like this also:-   
//                    const path2 = require('path')
//                    let result2 = 'home/user/photo.jpg'
//                   console.log(path.basename(result2));



//           4. path.extname(extension name)

//  Gets the file extension 
//  To find out the file type (by its extension like .txt, .js, .jpg).

// Eg:- 

                const path3 = require('path')
                let result3 = path3.extname('notes.txt')
                console.log(result3);              
//                                  Output:- .txt
                



//           5. path.dirname(directory name)

// Folder path only
// To get the directory (folder path) of a file.

            const path4 = require('path')
            let result4 = path4.dirname('home/user/project/file.js')
            console.log(result4);
//                                  Output:- home/user/project
            



 //          6. path.parse(to get out  put in object)

            const path5 = require('path')
            let result5 = path5.parse('home1/user/project/file.txt')
            console.log(result5);

//                                  Output:-
//                                      {
//                                        root: '',
//                                        dir: 'home1/user/project',
//                                        base: 'file.txt',
//                                        ext: '.txt',
//                                        name: 'file'
//                                      }


