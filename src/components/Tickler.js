import React from "react";

// ---> This is one way 

// function Tickler() {
//   function tickle() {
//     console.log("Teehee!");
//   }
//   return <button>Tickle me!</button>;
// }

// ---> This will also work

// function Tickler() {
//   return <button onClick={() => console.log("Teehee!")}>Tickle me!</button>;
// }

// ---> And this 

function Tickler() {
  function tickle(event) {
    console.log(event);
  }

  return <button onClick={tickle}>Tickle me!</button>;
}

export default Tickler;
