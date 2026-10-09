//                 Deployement Basics
//                 ------------------

// Making our app live on the internet so anyone can use it.









//           Vercel deployment flow chart
//           ----------------------------


//                writes React + Redux code
//                          |
//                          |      (Redux manages UI state inside browser)
//                          |
//                          v
//                      GitHub Repo
//                          |
//                          |
//                          v
//               when we push code (git push)
//                          |
//                          |  when we run:-git push origin main
//                          |     trigger starts,(inform vercel that code is ready to deploy or if we
//                          |          changed later also inform that code is ready for redeploy)
//                          |
//                          v
//              Vercel detects new commit
//                          |
//                          |   * Vercel is connected to our GitHub repo
//                          |       so,it automatically,sees new commit & starts deployment process
//                          |       This is called Continuous Deployment (CD)
//                          |
//                          v
//             Vercel clones repository
//                          |  
//                          |  Vercel run internally:- git clone our-repo
//                          |    - It copies our project into Vercel servers
//                          v
//            Install dependencies (npm install)
//                          |
//                          |  * Downloads all packages from package.json
//                          v
//         Detect framework (React / Vite / Next)
//                          |
//                          | * Vercel checks whether it is React/vite/Next
//                          |    - For React it sets:-
//                          |        Build command: npm run build
//                          |            Output: build/
//                          v
//          Run build command (npm run build)
//                          |
//                          |      * JSX conversion :- JSX --> JavaScript
//                          |      * Bundling  :- Many files --> few optimized files
//                          |      * Minification :- Removes spaces/comments
//                          |      * Tree shaking :- Removes unused code
//                          |      * Code splitting support :- Creates chunks for pages
//                          |
//                          v
//             Production build created
//                          |
//                          |  optimized static files generated
//                          v
//                build/ folder created
//                          |
//                          |     * index.html + static assets
//                          |     * Now it is production ready app
//                          v
//           Upload to CDN (Global servers)
//                          |
//                          |  *  Vercel uploads files to CDN (Content Delivery Network)
//                          |       - distributed across worldwide servers
//                          |  * User get data from the nearest server.
//                          v
//             App goes live (URL generated)
//                              * We get a link like,
//                                    https://our-app.vercel.app