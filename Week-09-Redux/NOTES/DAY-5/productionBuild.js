//                Production Build
//                ----------------

// Production build is the ready version of React app, ready for deployment.
//     - Not our coding version,but finished version
//  * It is fast, small & optimized

//     For that we can  Run:-   npm run build
//      Then, React makes our app,smaller,faster,combines files and removes unused codes

// What happens in production build?

// 1. Minification
//    - Removes spaces, comments, extra code

// 2. Bundling
//    - Combines files into optimized bundles
//       * Instead of many files like,
//           - home.js
//           - dashboard.js
//           - profile.js

//       * React combines them into a single file main.js

// 3. Code optimization
//    - Removes unused code

// 4. Performance optimization
//    - Faster loading and execution


// Output folder:
//           build/
//             ├── index.html
//             ├── static/
//             │     ├── js/
//             │     └── css/

//   After build, 
//         * This 'build/' , this folder will be the final app. We can upload this in internet
//         * This is what we upload to hosting (Netlify, Vercel, etc.)


//  If we didnt run npm run build,
//              Vercel automatically: runs npm run build
//                    and creates production build internally

// Use:-
//     * Faster performance
//     * Smaller file size
//     * Better user experience
//     * Ready for deployment




