import React, { JSX, useEffect, useState } from "react";

interface CountDownCounterProps {
  start: number;
}

function CountDownCounter({ start }: CountDownCounterProps): JSX.Element {
  const [count, setCount] = useState(start);
  const [isRunning, setRunning] = useState(false);
  useEffect(() => {
    if (!isRunning) {
      return;
    }
    const timer = setInterval(() => {
      setCount((value) => {
        if (value <= 1) {
          setRunning(false);
          //clearInterval(timer);
        }
        return value - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div>
      <button onClick={() => setCount(start)} disabled={count === 0}>
        Reset
      </button>

      <button
        onClick={() => setRunning((prev) => !prev)}
        disabled={count === 0}
      >
        {isRunning ? "Pause" : "Resume"}
      </button>
      {count}
    </div>
  );
}

function Countdown() {
  return <CountDownCounter start={10} />;
}
export default Countdown;
