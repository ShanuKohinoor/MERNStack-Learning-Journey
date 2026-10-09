//                       eventModule

// The events module allows to create, listen to, and handle custom events in Node.js, similar to how the browser handles click, load, etc.




// Node.js is a event- driven programming. Because Node.js is built on an event-driven architecture.That means things happen in response to events (like server requests, user input, etc.).


// Normally,when user interact, events happened. But in backend, there is no option to create event . So we have to set events by ourselves and trigger whenever we need.
// For handle event need a event listener

                        //   event create
                        //   event trigger
                        //   event listener


                        const EventEmitter = require ('event')
                        const event = new EventEmitter()   // create an event object


    // once we set like this, we can,
    //                        emit() → Trigger an event

//                            on() → Listen for an event
//Eg:-  


            const EventEmitter = require('events')
            const emitter =  new EventEmitter();


           // Register (listen) for an event
            emitter.on('greet', ()=>{
                console.log('Hello from the event!');     
            })


           // Emit (trigger) the event
            emitter.emit('greet')









//   Pass Data with Events
                     emitter.on('greetUser', (name) => {
                           console.log(`Hello, ${name}`);
                     });

                      emitter.emit('greetUser', 'Shanu');
//                                                      Output:Hello, Shanu




                  
   // Methods in event
   
   //  1. on
          event.on('greet',()=>{
           })


  //  2. emit
         event.emit('greet','value')

 //   3. once - once happen and automatically remove after that.
                     emitter.once('login', () => {
                           console.log('User logged in (only once)');
                     });

                      emitter.emit('login');
                      emitter.emit('login'); // Won't run again



 //   4. removeListener :- remove manually

                 function handleEvent() {
                      console.log('This will be removed later');
                }

                 emitter.on('removeMe', handleEvent);

                 emitter.emit('removeMe'); // Works

                 emitter.off('removeMe', handleEvent); // Remove listener

                  emitter.emit('removeMe'); // Won’t run





 //                 Method                         Description                     |
//                  -------                        -------------
//          `on(event, callback)`               Listen to an event              
//          `emit(event, data)`                 Trigger an event                
//          `once(event, callback)`             Listen only once                
//          `off(event, callback)`              Remove a listener               
//          `removeAllListeners()`              Remove all listeners            
//          `listenerCount(event)`              How many listeners for an event 
//          `eventNames()`                      Get all event names             
               


        

    