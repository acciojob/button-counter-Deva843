
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [count,setCount] = useState(0);
  
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {count} times</p>
        <button onClick={()=>setCount(count + 1)}>click</button>
    </div>
  )
}

export default App


// above and below both codes will do the same thing


// import React, { useState } from "react";
// import './../styles/App.css';

// const App = () => {
//   let [count,setCount] = useState(0);
//   function update(){
//     setCount(count + 1);

//   }
//   return (
//     <div>
//         {/* Do not remove the main div */}
//         <p>Button clicked {count} times</p>
//         <button onClick={update}>click</button>
//     </div>
//   )
// }

// export default App
