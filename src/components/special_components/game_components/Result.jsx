import React from "react";
import useStore from "../../../stores/game";
import "../../../styles/Result.css";

export function Result() {
  const status = useStore((state) => state.status);
  const score = useStore((state) => state.score);
  const reset = useStore((state) => state.reset);

  if (status === "running") return null;

  return (
    <div id="result-container">
      <div id="result">
        <h2>Game Over</h2>
        <p>Your score: {score}</p>
        <button onClick={reset}>Retry</button>
      </div>
    </div>
  );
}