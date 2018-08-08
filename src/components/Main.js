import React from 'react';

// Destructure parameters
function Main(props) {
  return (
    <main className="container">
      { props.top }
      { props.bottom }
    </main>
  );
}


/** This is the alternative way to send down the content, check the commented
 * out code in App.js 
 */

// function Main(props) {
//   return (
//     <main className="container">
//       { props.children }
//     </main>
//   );
// }

export default Main;