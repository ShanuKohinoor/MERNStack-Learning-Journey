
//Timer Tricker question

//Q1
setInterval(() => {
  const now = new Date();
  console.log(" Exactly every 10 seconds:", now.toLocaleTimeString());
}, 10000); // 10,000 ms = 10 seconds

                                //Exactly every 10 seconds: 14:03:07
                                // Exactly every 10 seconds: 14:03:17
                                // Exactly every 10 seconds: 14:03:27
                                // Exactly every 10 seconds: 14:03:37
                                // Exactly every 10 seconds: 14:03:47
//Q2
setInterval(() => {
  const now = new Date();
  if (now.getSeconds() % 10 === 0) {
    console.log(" Every 10 seconds:", now.toLocaleTimeString());
  }
}, 1000);

                                 // Every 10 seconds: 14:01:10
                                 // Every 10 seconds: 14:01:20
                                 // Every 10 seconds: 14:01:30
                                 // Every 10 seconds: 14:01:40
                                 // Every 10 seconds: 14:01:50
                                 // Every 10 seconds: 14:02:00
                                 // Every 10 seconds: 14:02:10
//Q3

let count = 1;

function delayedTimer() {
  console.log("Second:", count);
  count++;

  if (count <= 5) {
    setTimeout(delayedTimer, 1000);
  }
}

delayedTimer();    // Output :- 5
                                      // Second: 1
                                      // Second: 2
                                      // Second: 3
                                      // Second: 4
                                      // Second: 5

                                    
                                      
 //Q.5     To stop clock
 
 let seconds = 0;

const intervalId = setInterval(() => {
  seconds++;

  // Format mm:ss
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;

  // Pad with leading zero if needed
  let formattedTime = ________ + ":" + ________;

  console.log(formattedTime);

  if (seconds >= 60) {
    clearInterval(intervalId);
    console.log("⏹ Stopwatch stopped at 1 minute.");
  }
}, 1000);

                                    
