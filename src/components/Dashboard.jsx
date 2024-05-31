import React from "react";
import ChallengeCard from "./ChallengeCard";

export default function Dashboard() {
  return (
    <div className="flex flex-col justify-start items-start w-full h-full">
      <h1 className="ml-3 mb-10">Welcome!</h1>
      <div className="flex flex-col flex-grow w-full gap-5">
        <ChallengeCard title={"Challenge 1"} path={"/challenge1"} />
        <ChallengeCard title={"Challenge 2"} path={"/challenge2"} />
        <ChallengeCard title={"Challenge 3"} path={"/challenge3"} />
        <ChallengeCard title={"Challenge 4"} path={"/challenge4"} />
        <ChallengeCard title={"Challenge 5"} path={"/challenge5"} />
      </div>
    </div>
  );
}
