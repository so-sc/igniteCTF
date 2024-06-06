import React, { useContext, useEffect, useState } from "react";
import "../styles/global.css";
import soscIcon from "../assets/sosc.svg";
import RulesModal from "./RulesModal";
import { ChallengeContext } from "./ProgressContext";

export default function PageLayout({ children }) {
  const [showRules, setShowRules] = useState(false);
  const { progress, userData } = useContext(ChallengeContext);

  useEffect(() => {
    if (!userData) {
      setShowRules(true);
    }
  }, [userData]);

  return (
    <>
      <div className="h-screen w-screen md:max-w-screen-md flex flex-col">
        <div>
          {progress !== 5 && (
            <div
              className="absolute top-5 right-24 rounded-lg text-center bg-green-500 text-white w-20 cursor-pointer"
              onClick={() => setShowRules(true)}
            >
              <p className="text-white p-2">Rules</p>
            </div>
          )}
          <img
            src={soscIcon}
            alt="Logo"
            width={50}
            className="absolute top-5 right-5"
          />
        </div>
        <div className="h-28 flex flex-shrink-0" />
        <div className="flex flex-col w-auto flex-grow text-white text-3xl justify-center items-center">
          {children}
        </div>
        <div className="h-14 flex flex-shrink-0" />
      </div>
      <RulesModal
        show={showRules}
        onClose={() => setShowRules(false)}
        title="Rules"
      />
    </>
  );
}
