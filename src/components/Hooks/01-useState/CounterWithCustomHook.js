import React from "react";
import { useCounter } from "../../../hooks/useCounter";
import './counter.css'

export const CounterWithCustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter(100);
  return (
    <>
      <h2>Counter With Custom Hook: </h2>
      <h6>{counter}</h6>
      <hr/>

      <button className="btn btn-success" onClick={()=>increment(5)}>+1</button>
      <button className="btn btn-danger" onClick={reset}>Reset</button>
      <button className="btn btn-primary" onClick={()=>decrement(5)}>-1</button>
    </>
  );
};
