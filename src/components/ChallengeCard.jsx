import React from "react";

export default function ChallengeCard({ title }) {
  return (
    <div
      className="w-full bg-slate-900 h-16 flex items-center justify-center  cursor-pointer"
      onClick={() => console.log("hello")}
    >
      <h1 className="text-sm text-center">{title}</h1>
    </div>
  );
}
