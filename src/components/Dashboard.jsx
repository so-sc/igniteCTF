import React from "react";
import ChallengeCard from "./ChallengeCard";

export default function Dashboard() {
  return (
    <div className="flex flex-col justify-start items-start">
      <h1 className="ml-3 mb-10">Welcome!</h1>
      <div className="flex flex-col flex-grow w-full gap-5">
        <ChallengeCard title={"Challenge 1"} />
        <ChallengeCard title={"Challenge 2"} />
        <ChallengeCard title={"Challenge 3"} />
        <ChallengeCard title={"Challenge 4"} />
        <ChallengeCard title={"Challenge 5"} />
      </div>
    </div>
  );
}
