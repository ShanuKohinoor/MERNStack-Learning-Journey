//                    studentDatafs.js   


      const express = require ('express')   // Import express framework to create the web server
      const app = express();                // Create instance of express app
      const fs = require('fs')              // Import Node.js file system module





      const fileName = 'studentData.txt';    // // Define the filename where student data will be stored


      //Route to write data to file
      app.get('/write', (req,res)=>{
        fs.writeFile(fileName, 'Student: Shanu\n Marks: 90',(err)=>{
            if(err) {                                                      // If an error occurs during write, send HTTP 500 (server error) response
                return  res.status(500).send('Error writing file')
            }
            res.send('File written successful')
        })
      })


   // Route to Read file
      app.get('/read',(req,res)=>{
        fs.readFile(fileName,'utf8',(err,data) =>{  // if we dont give utf8, we will get binary details(buffer)
            if (err){
               return res.status(404).send('Error found')
            }
            res.send(`<pre>${data}</pre>`)    // Send file content wrapped inside <pre> tag to preserve formatting (Show the text exactly how it is written in the file without any change including spaces, tabs, and line breaks.) in browser
                                              // <pre> stands for “preformatted text”, for displaying plain files.
        })
      })

// Route to Append file

     app.get('/append',(req,res)=>{
        fs.appendFile(fileName,'\nGrade:A+',(err)=>{
            if (err){
                return res.status(500).send('Failed to append data')
            }
            res.send('Append data successfully')
        })
     })


// Route to check Exist file or not

     app.get('/exists',(req,res)=>{
        const exists = fs.existsSync(fileName)
        res.send(exists ? 'File exist'  : 'File doesnot exist')   // Send response message based on file existence 
     })

    
// Route to delete the file

    app.get('/unlink',(req,res)=>{
        fs.unlink(fileName, (err)=>{       // Delete the file asynchronously

            if(err){
             return res.status(500).send('Error deleting file')
        }  res.send('File deleted successfully')
        })
    })


// Rename file
    fs.rename('./test.js', './sample.txt',(err)=>{
        if (err){
            console.log(err);     
        }  console.log('File renamed'); 
        
    })                                   // Result will be shown in sample.text file. Previous name of that file was test.js. After running this, the file name changed to sample.txt




    
 //Listen on port 4000
    app.listen(4000,()=>{
        console.log('Server running at http://localhost:4000');
        
   })