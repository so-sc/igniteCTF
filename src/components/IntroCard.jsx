import React, { useState } from "react";

export default function IntroCard({ login }) {
  const [username, setUsername] = useState(null);

  function handleNext() {
    localStorage.setItem("USER", username);
    const obj = {
      c: { c1: false, c2: false, c3: false, c4: false, c5: false },
      d: { startTime: null, endTime: null },
    };
    localStorage.setItem(`${username}_DATA`, JSON.stringify(obj));
    login();
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center">What do we call you?</h1>
      <input
        id="name-input"
        className="rounded-lg bg-slate-900 outline-none pl-3 mt-3 w-full"
        placeholder="Enter you name"
        style={{ fontSize: "0.9rem" }}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className="outline outline-white mt-5 px-2 rounded-lg text-center w-full"
        style={{ fontSize: "0.9rem" }}
        onClick={handleNext}
      >
        Begin
      </button>
    </div>
  );
}
