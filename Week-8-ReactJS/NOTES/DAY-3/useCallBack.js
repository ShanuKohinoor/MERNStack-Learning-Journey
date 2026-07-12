//                           useCallBack
//                           -----------





// It is used to store(memoize) a function.
//         - That meant dont recreate function again and again.


// useMemo used to store value whereas useCallBack used to store function.

// In normal, every render function recraeted.
// with the help of useCallBack, wont function recreated.

//  import { useCallback } from "react";

// const handleClick = useCallback(() => {
//   console.log("Clicked");
// }, []);