//Relationship Between window, Global Object, and the DOM
   
   //Interconnection:- window is the browser itself, document as the page we are seeing, and the DOM as the structure of that page.



       //window: Provides the environment where the JavaScript runs. It handles everything from browser events, timers, screen info, and more.

       //document: Represents the HTML content loaded in the browser and is a property of window.

       //Global Object: In browsers, the global object is window. Thus, whether you talk about the global scope or window, you are discussing the same container that holds all top-level objects and functions.
      //The window object provides access to the browser’s features and also holds all global variables and functions.(interview answer)

//chatgpt answer:-


//1. window object
    //In browsers, window is the global object — it represents the browser’s window (the entire browser tab).

        //All global variables and functions become properties of window.

        //Example: var x = 10; is same as window.x = 10;

//2. Global Object
         //The global object is the top-level object that holds everything globally accessible.

        //In browsers, this global object is the window.

        //In Node.js, it’s different (global instead of window).

//3. DOM (Document Object Model)
        //The DOM is a tree-like structure that represents the HTML page.

       //The window object contains the document object, which is the entry point to the DOM.

       //You can access and manipulate page elements via document.






  //WINDOW OBJECT:- Which represent window in the browser.

        //The window object is the top-level object in browser-based JavaScript. It encapsulates everything that happens in a web page and acts as the execution context.

        // In a browser, window is the main object that holds everything we see and do in our web page.


        //An object of window created automatically by the browser.
        //The window object supported by all browsers.
        //All global javascript objects,functions, and varaiables automatically become members of the window object.
        //Global variables are properties and Global functions are methods of the window object.
        //window is the object of browser not the object of javascript.(Javascript objects are string ,array,date etc).

     //Methods of window object
        // 1. alert()
        // 2. confirm()
        // 3. prompt()
        // 4. open()
        // 5. close()
        // 6. setTimeOut()


    
               var a = 10;
               console.log(window.a); // 10

               console.log(window.document); // full DOM object











               
     //Q.1 Q: If you declare let x = 5; in the global scope, is it available as window.x? Why or why not?

             //Answer: No. Variables declared with let or const are not added to the window object. Only var does that.




  //GLOBAL OBJECT:-The global object is the main container that holds all globally available things in your JavaScript program.
            //Global object within the browser is a window object.
            // window === global object
            // So anything we declare globally (outside functions), goes inside window.
            // In node.js, global object is not window. Its called global
            //  In browser,window is global object














//DOCUMENT OBJECT:-It represents entire HTML file of JS

    //I t is a part of window object,used to access and control the content of web page
     //it allows to change,read,write etc in the webpage using javascript

    // The  document object is the entry point to the DOM.     
    // When webpage is loaded,browser creates the HTML DOM of the page. 
    // Once it created, all elements in the HTML is represented as object
    //It is the part of the DOM API
                  //*It represents the HTML document loaded in the browser
                  //*created automatically by the browser when a webpage is loaded
                         

       //document is a property of window.

           //It gives access to the DOM, allowing you to manipulate HTML elements.

                //wecan select, create, or modify elements.





              document.querySelector("#title"); // by id
              document.querySelector(".info");  // by class
              document.querySelector("p");      // by tag




