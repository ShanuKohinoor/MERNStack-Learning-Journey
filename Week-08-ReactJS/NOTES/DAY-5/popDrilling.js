//                                 Pop Drilling
//                                -------------


//  Prop drilling is the process of passing data through multiple nested components
//                  even when intermediate components do not need the data.

//           * Passing props through many levels unnecessarily.

//  Eg:-
// function App() {
//   const user = "John";

//   return <Parent user={user} />;
// }

// function Parent({ user }) {
//   return <Child user={user} />;
// }

// function Child({ user }) {
//   return <GrandChild user={user} />;
// }

// function GrandChild({ user }) {
//   return <h1>{user}</h1>;
// }

//                            Only GrandChild needs user. But we passed it through Parent & Child also