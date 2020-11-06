import React from "react";
import { useCounter } from "../../../hooks/useCounter";
import { useFetch } from "../../../hooks/useFetch";
import "./examples.css";

export const MultipleCustomHooks = () => {
  //const randomNumber = Math.floor(Math.random() * (100 - 1)) + 1;
  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0]; //!!data lo que verifica sino viene null => !!null = false

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      {loading && (
        <div className="alert alert-info text-center">Loading...</div>
      )}
      {!loading && (
        <blockquote className="blockquote text-right">
          <p className="mb-0"> {quote} </p>
          <footer className="blockquote-footer"> {author} </footer>
        </blockquote>
      )}
      <button
        disabled={loading}
        className="btn btn-primary"
        onClick={() => increment(1)}
      >
        Next quote
      </button>
    </div>
  );
};
