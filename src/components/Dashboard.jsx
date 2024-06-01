import React, { useEffect, useState } from "react";
import ChallengeCard from "./ChallengeCard";
import ProgressBar from "./ProgressBar";

export default function Dashboard() {
  const user = localStorage.getItem("USER");
  const [username, setUsername] = useState(user);
  useEffect(() => {
    console.log(username);
  }, [username]);

  return (
    <div className="flex flex-col justify-start items-center w-full h-full">
      <h1 className="text-center mb-10">Challenges</h1>
      <ProgressBar progress={5} />
      <div className="flex flex-col flex-grow w-full gap-5 mt-10 justify-center items-center text-white">
        <ChallengeCard title={"Challenge 1"} path={"/challenge1"} />
        <ChallengeCard title={"Challenge 2"} path={"/challenge2"} />
        <ChallengeCard title={"Challenge 3"} path={"/challenge3"} />
        <ChallengeCard title={"Challenge 4"} path={"/challenge4"} />
        <ChallengeCard title={"Challenge 5"} path={"/challenge5"} />
      </div>
    </div>
  );
}
