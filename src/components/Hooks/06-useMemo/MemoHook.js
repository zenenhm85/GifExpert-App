import React, { useMemo, useState } from "react";
import { greatProcess } from "../../../helpers/getGreatProcess";
import { useCounter } from "../../../hooks/useCounter";

import "../02-useEffect/effects.css";

export const Memorize = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);
  
  const memoGreatProcess = useMemo(() => greatProcess(counter), [counter]);

  return (
    <div>
      <h1>
        Counter: <small>{counter}</small>{" "}
      </h1>
      <hr />
      <p>{memoGreatProcess}</p>
      <button className="btn btn-primary" onClick={()=>increment(5)}>
        +1
      </button>

      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
