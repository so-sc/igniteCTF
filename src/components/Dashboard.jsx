import React from "react";
import Challenge1 from "../challenges/Challenge1";
import ChallengeCard from "./ChallengeCard";

export default function Dashboard() {
  return (
    <div className="flex flex-col justify-start items-start">
      <h1 className="ml-3 mb-10">Welcome!</h1>
      <div className="flex flex-col flex-grow w-full gap-5">
        <ChallengeCard />
      </div>
    </div>
  );
}
