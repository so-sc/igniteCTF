import React, { useContext, useState } from "react";
import { ChallengeContext } from "./ProgressContext";

export default function IntroCard({ login }) {
  const [usernameDisp, setUsernameDisp] = useState(null);

  const { setUserData, setUsername } = useContext(ChallengeContext);

  function handleNext() {
    localStorage.setItem("USER", usernameDisp);
    const now = new Date();
    const obj = {
      c: { c1: false, c2: false, c3: false, c4: false, c5: false },
      d: {
        startTime: now,
        endTime: null,
        hintsUsed: { c1: false, c2: false, c3: false, c4: false, c5: false },
      },
    };

    setUsername(usernameDisp);
    const data = localStorage.getItem(`${usernameDisp}_DATA`);
    if (!data) {
      localStorage.setItem(`${usernameDisp}_DATA`, JSON.stringify(obj));
      setUserData(obj);
    } else {
      setUserData(JSON.parse(data));
    }
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
        onChange={(e) => setUsernameDisp(e.target.value)}
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
