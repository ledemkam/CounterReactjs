import React, { useState } from 'react';
import './App.css';

function App() {
   var [count, setCount] = useState(0);

   return (
      <div className="App">
         <p>Counter {count}</p>
         <button onClick={() => setCount(count + 1)}> + </button>
         <br />
         <button onClick={() => setCount(count - 1)}> -</button>
         <br />
         <button onClick={() => setCount((count = 0))}> reset</button>
      </div>
   );
}

export default App;
