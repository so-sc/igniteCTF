import React from "react";

export default function ProgressBar({ progress }) {
  return (
    <ul className="steps w-full">
      <li
        data-content=""
        className={`step ${progress > 0 ? "step-accent" : ""}`}
      ></li>
      <li
        data-content=""
        className={`step ${progress > 1 ? "step-accent" : ""}`}
      ></li>
      <li
        data-content=""
        className={`step ${progress > 2 ? "step-accent" : ""}`}
      ></li>
      <li
        data-content=""
        className={`step ${progress > 3 ? "step-accent" : ""}`}
      ></li>
      <li
        data-content=""
        className={`step ${progress > 4 ? "step-accent" : ""}`}
      ></li>
    </ul>
  );
}
