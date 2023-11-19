import { useEffect, useState } from "react";

export default function Effect() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("mount");
  }, [counter]);
  const incriment = () => {
    setCounter((counter) => counter + 1); //au function increment vous pouvez nommer counter ou un autre nom
  };
  const decrement = () => {
    setCounter((counter) => counter - 1);
  };
  const reset = () => {
    setCounter((counter) => counter - counter);
  };
  return (
    <>
      <div>
        <h1>Effect counter : {counter}</h1>
        <button onClick={incriment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
      </div>
    </>
  );
}
