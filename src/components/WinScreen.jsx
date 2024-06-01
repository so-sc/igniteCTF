import React from "react";
import Crown from "../assets/crown.svg";

export default function WinScreen() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full text-center">
      <div className="w-11/12 max-w-md bg-slate-800 bg-opacity-50 p-5 py-8 rounded-xl flex flex-col justify-center items-center">
        <p>All Flags Captured!</p>
        <img src={Crown} className="w-36" />
        <p className="text-base">Hints Used:</p>
        <p className="mt-1">1/5</p>
        <p className="text-base mt-2">TIme Taken:</p>
        <p className="mt-1">50m 30s</p>
      </div>
    </div>
  );
}
