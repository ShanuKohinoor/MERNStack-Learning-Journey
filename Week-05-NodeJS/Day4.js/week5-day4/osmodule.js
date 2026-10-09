//                 osModule(Operating system Module)


// To get information about  hardware/operating  like CPU, memory etc
// Allow to interact with our computers operating system—like checking the platform, CPU info, memory, home directory.
//  os.app, os.cpu,os.
//  It is part of Node.js core modules, so don’t need to install.
//  const os = require('os');

        const os = require('os');


                      

//     Method                 What It Does                             Output                      
//     ------                 ------------                            ----------
// os.platform()           OS platform name                        
console.log("Platform:", os.platform());                        // Platform: win32

// os.type()               OS name                                  
console.log("OS Type:", os.type());                            // OS Type: Windows_NT

// os.arch()               CPU architecture                         
console.log("Architecture:", os.arch());                       //  Architecture: x64
                  

// os.totalmem()           Total memory (in bytes)               
 console.log("Total Memory (GB):", os.totalmem() );           //  Total Memory (GB): 8481456128
            
// os.freemem()            Free memory (in bytes)                  
 console.log("Free Memory (GB):", os.freemem());              // Free Memory (GB): 2217631744

// os.uptime()             System uptime (in seconds)           
console.log("System Uptime (minutes):", os.uptime() );        // System Uptime (minutes): 91454.39
                   
// os.homedir()            User's home directory                   
 console.log("Home Directory:", os.homedir());                // Home Directory: C:\Users\User
    
// os.userInfo()           Current user info                    { username, homedir, ... } 
console.log("User Info:", os.userInfo());

// os.networkInterfaces()  Network details                      Ethernet/Wi-Fi info
console.log("Network Interfaces:", os.networkInterfaces());
         
// os.cpus()               Info about all CPU cores              Array of objects    
 console.log("CPU Info:", os.cpus());





