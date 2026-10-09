//                      React.memo
//                      ----------


//  React.memo prevents a component from unnecessary re-rendering if props didn't change.

// It compare new with old props. If there is no change in props, it wont re-render

// Normally, when parent re-renders, child also re-renders,even if child props are same.
//       *  React.memo stops that.