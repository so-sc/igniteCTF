import React, { useContext, useEffect, useState } from "react";
import ChallengeCard from "./ChallengeCard";
import ProgressBar from "./ProgressBar";
import { ChallengeContext } from "./ProgressContext";
import ParticleFinal from "./ParticleFinal";
import WinScreen from "./WinScreen";
import ParticleFinal1 from "./ParticleFinal1";

export default function Dashboard() {
  const { challengeData, progress } = useContext(ChallengeContext);

  return (
    <div className="flex flex-col justify-start items-center w-full h-full">
      {progress !== 5 ? (
        <>
          <h1 className="text-center mb-10">Challenges</h1>
          <ProgressBar progress={progress} />
          <div className="flex flex-col flex-grow w-full gap-5 mt-10 justify-center items-center text-white">
            <ChallengeCard
              title={"Challenge 1"}
              path={"/challenge1"}
              complete={challengeData && challengeData.c1}
            />
            <ChallengeCard
              title={"Challenge 2"}
              path={"/challenge2"}
              complete={challengeData && challengeData.c2}
            />
            <ChallengeCard
              title={"Challenge 3"}
              path={"/challenge3"}
              complete={challengeData && challengeData.c3}
            />
            <ChallengeCard
              title={"Challenge 4"}
              path={"/challenge4"}
              complete={challengeData && challengeData.c4}
            />
            <ChallengeCard
              title={"Challenge 5"}
              path={"/challenge5"}
              complete={challengeData && challengeData.c5}
            />
          </div>
        </>
      ) : (
        <>
          <WinScreen />
          {/* <ParticleFinal /> */}
          <ParticleFinal1 />
        </>
      )}
    </div>
  );
}
