import React, { Fragment, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <Fragment>
      <p>Counter : {counter}</p>
      <button onClick={() => setCounter((value) => value + 1)}> increment</button>

      <button onClick={() => setCounter(0)}> reset</button>
    </Fragment>
  );
}

export default Counter;
