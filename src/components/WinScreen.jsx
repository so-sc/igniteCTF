import React, { useContext, useEffect, useState } from "react";
import Crown from "../assets/crown.svg";
import { ChallengeContext } from "./ProgressContext";

export default function WinScreen() {
  const [Time, setTime] = useState("");
  useEffect(() => {
    const user = localStorage.getItem("USER");
    const data = JSON.parse(localStorage.getItem(`${user}_DATA`));
    const start = new Date(data.d.startTime);
    const end = new Date(data.d.endTime);
    formatTimeDifference(start, end);
    // console.log(start, end);
  }, []);

  const { hintNumber } = useContext(ChallengeContext);

  function formatTimeDifference(startTime, endTime) {
    const diffMs = endTime - startTime;

    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

    setTime(
      `${hours == 0 ? "" : `${hours}h`} ${
        minutes == 0 ? "" : `${minutes}m`
      } ${seconds}s`
    );
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-full text-center">
      <div className="w-11/12 max-w-md bg-slate-800 bg-opacity-50 p-5 py-8 rounded-xl flex flex-col justify-center items-center">
        <p>All Flags Captured!</p>
        <img src={Crown} className="w-36" />
        <p className="text-base mt-2">Hints Used:</p>
        <p className="mt-1">{`${hintNumber}/5`}</p>
        <p className="text-base mt-2">TIme Taken:</p>
        <p className="mt-1">{Time}</p>
      </div>
    </div>
  );
}
