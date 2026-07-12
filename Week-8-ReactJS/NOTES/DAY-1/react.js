//                                          REACT
//                                          -----

// React:-  Open source library for building user interfaces.
// Definition:- React is a popular JavaScript library (developed by Facebook) for building scalable and interactive user interfaces.
// It is front end Javascript library used to create websites which is developed by facebook software engineer 'Jordan Walke'.
// Fcebook invest money and resources to keep the project alive to make sure it is not going to die soon.
// Used to build single-page applications(SPAs).
// React is a tool used to buld UI components.
// People choose  React because,it is
//        * popular, 
//        * fast :-Apps made in React can handle complex updates and still feel quick and responsive.,
//        * modular :- Instead of writing large, dense files of code,we can write many smaller, reusable files. 
//               React’s modularity can be a beautiful solution to JavaScript's maintainability problems., 
//        * scalable, & 
//        * flexible.
// It is not working as a traditional website.
//           * In traditional,
//               - If we want to update a small area ,it will render whole page.
//               - Also, we have to  manually change DOM.Like,
//                   Eg:-     document.getElementById("name").innerText = "Shanu";
//                      * which is hard to manage
//                      * messy code
//                      * slow for big apps

//    But with react, only need to change name alone, React update UI automatically.
//                   Eg:-     <h1>{name}</h1>
//                      * React tracks changes
//                      * Updates only what is needed


// Most APIs return data in Json format, and React uses that data to render UI.
//          * React itself doesn't use JSON. APIs return JSON

// React allows us to update the web page efficiently without reloading the whole page every time something changes.
// React supports Client-Side Rendering (CSR), but can also support Server-Side Rendering (SSR) using tools like :contentReference[oaicite:2]{index=2}.
// Prerequisites for React are HTML,CSS and JavaScript.
// Knowledge of modern JavaScript is essential.


// Why React?
// *  React is popular because it solves common problems in web development
// *  In survey, findout it is the most popular frontent library among developers and most sort out skill sets by companies.





// Key Features:
//  *A) React is component based architecture
//      --> This breakdowns our application into small encapsulated parts which then composed to more complexed UIs.
//      --> It is component-based, meaning the UI is broken into small reusable pieces called components.
//              Eg:- Traditional website breakdown into header,side nav,main content and footer

//  *B) JSX Syntax – Write HTML-like code inside JavaScript.
//  *C) Props & State – Props pass data from parent to child; state manages internal component data.
//  *D) Virtual DOM – Efficiently updates the UI by comparing changes before touching the real DOM.
//             * Handle efficient update and rendering  components:- Avoid re-rendering. Normally Browser re-render entire (DOM)
//                            * Reacts create a virtual copy of Real DOM
//                            * When data changes:-
//                                    will create a new Virtual DOM
//                            * Compares old vs new which is known as diffing
//                            * Updates only changed parts is known as patching


//  *E) Declarative –
//           We describe what the UI should look like, React takes care of updating it.
//              * Instead of say what/how to update(Imperative)),say what should UI look like(Declarative) 
//                               * Declarative paradigm instead of imperative paradigm
//                                       - Tell React what we want and React will build the actual UI

//  * Reusable component:- Instead of writing same UI repeatedly,we can reuse it.Hence reduce bugs.


//  * Large ecosystem : Rather than a library React supports huge supports system
//  * Seamlessly integrate react into any of our applications.
//                     * Portion of page or complete page or entire appplication itself.
//  * SPA-Friendly :- makes single page application.
//                   - A web app that loads a single HTML page and updates content dynamically without refreshing the whole page.
//                             * In normal webpage(traditional), in every click reload whole page everytime.
//                             * In React only reload one time, then update the content alone dynamically.
//                             * Use Javascript to change the content.
//                   - React is perfect for SPAs because it efficiently updates the parts of the UI that need change.
//                   - React is well-suited for building SPAs because it updates only necessary parts of the UI without reloading the page.


//          With React and Without React
//         -----------------------------

//  Without React:-
//           Eg:-
//                          User clicks link  
//                               |
//                               |  <a href = "/about">
//                               |
//                               v
//                       Browser sends HTTP request to Server
//                               |
//                               |
//                               V
//                     Server process request
//                               |
//                               |
//                               V
//                    Server returns full HTML Page
//                               |
//                               |
//                               V
//                Browser clears old DOM and loads new HTML
//                               |
//                               |
//                               V
//                       Full page reloads        
//                               |
//                               |
//                               V
//                         State reset

//  With React:-
//         Eg:-


//                          User clicks link  
//                               |
//                               |  <Link to= "/about">
//                               |
//                               v
//                  React Router intercepts click
//                               |
//                               |
//                               V
//                No request to server for new page
//                               |
//                               |
//                               V
//                  React updates URL internally
//                               |
//                               |
//                               V
//                Only required component changes
//                               |
//                               |
//                               V
//                   Virtual DOM diffing happens
//                               |
//                               |
//                               V
//                 Only chnaged part updated in Real DOM
//                               |
//                               |
//                               V
//                          No reload
//                          Smooth UI
//                               |
//                               |
//                               V
//                        State preserved



//   TRADITIONAL                    REACT (SPA)
//   ------------                  ------------
//    Click Link                    Click Link
//        |                             |
//        |                             |                       
//        v                             v                       
//   Request to Server             React Handles
//        |                             |
//        |                             |                       
//        v                             v                       
//   Full HTML Response            No Full HTML
//        |                             |
//        |                             |                       
//        v                             v                       
//   Full Page Reload               No Reload
//        |                             |
//        |                             |                       
//        v                             v                       
//    State Lost                   State Saved 
//        |                             |
//        |                             |                       
//        v                             v                       
//  Slow UX(user experience)         Fast UX 




//                               Real DOM vs Virtual DOM
//                              -------------------------

// Real DOM is the Browser's HTML structure.
// --------
// When we update a single element whole page become re render, results in slowing down 


//Virtual DOM:- React's lightweight copy of Real DOM.
//----------
//          * It updates only what change in Real DOM
//          * It improve performance
//          * Reduces unnecessary re-rendering

//                   When we write JSX
//                               |
//                               |
//                               V
//                   React creates virtual DOM
//                               |
//                               |
//                               V
//                   When data changes:-
//                               |
//                               |
//                               |
//                               V
//                      * React creates New Virtual DOM
//                                      |
//                                      V
//                      * Compares with Old one (Diffing)
//                                      |
//                                      V
//                      * Updates only changed parts







//                                   Installation and working
//                                   ----*-------*-----*----


// Install react by using a build tool vite.
//    * Vite is a modern development tool (like a super-fast server and builder) that helps 
//                   React run smoothly in the browser.

// Before React,Vanilla JavaScript required manually updating the DOM while building websites,
//                 which is slow and hard to manage for large apps.


// Vite helps to
//     1) Reads our Files:
//            - Vite looks at all your .jsx and .js files.
//            - Also checks for CSS, images, fonts, and other assets.

//     2) Converts JSX --> JavaScript:
//            - Browsers cannot execute JSX directly.
//            - Vite uses Babel internally to convert JSX into plain JavaScript.



//   Step 1:- Install Vite globally

//           run:-     npm install -g create-vite


//   Step 2:- Create a new React project
//           run:-    npm create vite@latest


//           * Vite will ask:-
//                  - Project name:  myApp

//                  - Select a framework: React

//                  - Select a variant: JavaScript

//   Step 3:- Navigate to project folder

//             run:-   cd myApp

//                  *  will go inside the newly ctreated project folder



// Step 4:- Install project dependencies

//           run:- npm install 

//                  * Installs React, ReactDOM, Vite, and other required dependencies.


//   Step 5:- Start development server

//           run:-   npm run dev

//            *  when we run this,Vite starts a super fast development server with 
//                      HMR (Hot Module Replacement),
//               - so when we edit our JSX, the browser updates instantly without full reload.
//            * In Terminal we can see a local URL, Eg:-  http://localhost:5173

//  Step 6:- 

//              Open the URL in our browser 
//                        * now our React app will be running.


//  Step 7:- 
//            Edit file 'src/App.jsx'
//                * delete code inside App.jsx       // It is too complicated
//                * add another code like:-

//   write:-      function App() {
//                         return (
//                     <>
//                       <h1>Hello World </h1>
//                       <p>Welcome to React app</p>
//                     </>
//                   );
//                 }










//                            Start
//                               |
//                               |
//                               V
//             Write React code (Components with JSX)
//                               |
//                               |
//                               V
//                   Vite reads our files
//                               |   - Converts JSX --> JavaScript (so browser understands)
//                               |   - Handles CSS, images, etc.
//                               |   - Sends it to browser instantly
//                               |
//                               V
//                Browser executes the JavaScript
//                               |
//                               |
//                               V
//               React creates Virtual DOM (copy of UI in memory)
//                               |
//                               |
//                               V
//               React checks what changed (diffing)
//                               |
//                               |
//                               V
//              Only the changed parts of Real DOM are updated
//                               |
//                               |
//                               V
//                     UI is updated on screen