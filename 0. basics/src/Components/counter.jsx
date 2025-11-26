import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(15);

  function incrementCount() {
    setCounter(counter + 1);
  }

  function decrementCount() {
    if(counter > 0)
    setCounter(counter - 1);
else alert("counter can't be negative")
  }

  return (
    <div>
      <h1> value : {counter}</h1>
      <button onClick={incrementCount}>Increase : {counter}</button>
      <br />

      <button onClick={decrementCount}>Decrease : {counter}</button>
    </div>
  );
}

export default Counter;
