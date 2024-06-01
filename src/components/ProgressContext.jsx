import React, { createContext, useEffect, useState } from "react";

export const ChallengeContext = createContext();

export const ChallengeProvider = ({ children }) => {
  const [username, setUsername] = useState(localStorage.getItem(`USER`));
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem(`${username}_DATA`))
  );
  const [challengeData, setChallengeData] = useState(null);
  const [progress, setProgress] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(null);
  const [hintNumber, setHintNumber] = useState(0);

  useEffect(() => {
    console.log(userData);
    if (!userData) return;
    setChallengeData(userData.c);
    setHintsUsed(userData.d.hintsUsed);
  }, [userData]);

  useEffect(() => {
    if (!challengeData) return;
    updateProgress(challengeData);
    console.log(challengeData);
    let obj = userData;
    obj["c"] = challengeData;
    localStorage.setItem(`${username}_DATA`, JSON.stringify(obj));
    // console.log(challengeData);
  }, [challengeData]);

  useEffect(() => {
    if (!hintsUsed) return;
    updateHints(hintsUsed);
    let obj = userData;
    obj["d"]["hintsUsed"] = hintsUsed;
    localStorage.setItem(`${username}_DATA`, JSON.stringify(obj));
    // console.log(challengeData);
  }, [hintsUsed]);

  function updateProgress(obj) {
    const progressCount = Object.values(obj).reduce(
      (acc, value) => acc + (value === true ? 1 : 0),
      0
    );
    setProgress(progressCount);
    if (progressCount === 5) logFinishTime();
    console.log(progressCount);
  }

  function updateHints(obj) {
    const progressCount = Object.values(obj).reduce(
      (acc, value) => acc + (value === true ? 1 : 0),
      0
    );
    setHintNumber(progressCount);
    console.log(progressCount);
  }

  const completeChallenge = (key) => {
    setChallengeData((prevState) => ({
      ...prevState,
      [`c${key}`]: true,
    }));
  };

  const useHint = (key) => {
    if (!key) return;
    setHintsUsed((prevState) => ({
      ...prevState,
      [`c${key}`]: true,
    }));
  };

  function logFinishTime() {
    const end = new Date();
    const obj = userData;
    if (obj["d"]["endTime"]) return;
    obj["d"]["endTime"] = end;
  }

  return (
    <ChallengeContext.Provider
      value={{
        userData,
        setUserData,
        progress,
        username,
        setUsername,
        challengeData,
        setChallengeData,
        completeChallenge,
        useHint,
        hintNumber,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};
