import React, { createContext, useEffect, useState } from "react";

export const ChallengeContext = createContext();

export const ChallengeProvider = ({ children }) => {
  const [username, setUsername] = useState(localStorage.getItem(`USER`));
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem(`${username}_DATA`))
  );
  const [challengeData, setChallengeData] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    console.log(userData);
    if (!userData) return;
    setChallengeData(userData.c);
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

  function updateProgress(obj) {
    const progressCount = Object.values(obj).reduce(
      (acc, value) => acc + (value === true ? 1 : 0),
      0
    );
    setProgress(progressCount);
    console.log(progressCount);
  }

  const completeChallenge = (key) => {
    setChallengeData((prevState) => ({
      ...prevState,
      [`c${key}`]: true,
    }));
  };

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
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};
