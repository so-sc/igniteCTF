import React, { useContext, useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import Bluetooth from "../assets/bluetooth.png";
import Youtube from "../assets/youtube.png";
import Terminal from "../assets/terminal.png";
import Edge from "../assets/edge.png";
import IncorrectModal from "../components/IncorrectModal";
import HintModal from "../components/HintModal";
import { ChallengeContext } from "../components/ProgressContext";
import SuccessModal from "../components/SuccessModal";
import ConfirmationModal from "../components/ConfirmationModal";

export default function Challenge1() {
  const [userFlag, setUserFlag] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const answer = "igniteCTF{byte}";

  const { completeChallenge, userData } = useContext(ChallengeContext);

  useEffect(() => {
    if (!userData) return;
    setIsComplete(userData.c.c1);
  }, [userData]);

  function handleClick() {
    if (userFlag.trim().toLowerCase() === answer.toLowerCase()) {
      // progress = progress + 1;
      completeChallenge(1); //challenge number
      setShowSuccess(true);
    } else {
      setShowModal(true);
    }
  }

  const handleHintClick = () => {
    setShowConfirmation(true); // Show confirmation modal when hint button is clicked
  };

  const handleConfirmHint = () => {
    setShowConfirmation(false);
    setShowHint(true);
    console.log("Hint viewed, points deducted.");
  };
  return (
    <>
      <div className="flex flex-col w-full h-full justify-between">
        <BackButton />

        <div className="flex flex-col w-full p-4 justify-between items-center ">
          <h1 className="mb-10">Challenge 1</h1>
          <p className="text-base text-justify">
            Find the flag in the characters of the words represented by the
            letters of the following images:
          </p>
          <div className="flex w-11/12 justify-center items-center gap-5 my-5">
            <div className="flex-1 flex justify-center">
              <img
                className="max-w-full h-auto"
                src={Bluetooth}
                alt="Bluetooth"
              />
            </div>
            <div className="flex-1 flex justify-center">
              <img className="max-w-full h-auto" src={Youtube} alt="Youtube" />
            </div>
            <div className="flex-1 flex justify-center">
              <img
                className="max-w-full h-auto"
                src={Terminal}
                alt="Terminal"
              />
            </div>
            <div className="flex-1 flex justify-center">
              <img className="max-w-full h-auto" src={Edge} alt="Edge" />
            </div>
          </div>
          <p className="text-sm text-justify px-3 mt-5">
            {`Use the word as the flag in the format:`}
          </p>
          <p className="text-sm text-justify px-3 text-teal-500">{`igniteCTF{XXXX}`}</p>
          <div
            className="mt-5 rounded-lg text-center bg-green-500 text-white"
            onClick={handleHintClick}
          >
            <p className="text-sm px-4 py-2 cursor-pointer">HINT</p>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center px-5">
          <input
            id="answer"
            className={`rounded-lg bg-slate-900 outline-none pl-3  w-full py-1 ${
              isComplete ? "placeholder:text-green-500" : ""
            }`}
            placeholder={isComplete ? answer : "Answer"}
            style={{ fontSize: "0.9rem" }}
            onChange={(e) => setUserFlag(e.target.value)}
            disabled={isComplete}
          />
          <button
            className={`outline ${
              isComplete ? "outline-slate-700" : "outline-white"
            } mt-5 px-2 rounded-lg text-center w-full btn bg-black text-white`}
            style={{ fontSize: "0.9rem" }}
            onClick={handleClick}
            disabled={isComplete}
          >
            Submit
          </button>
        </div>
      </div>
      <IncorrectModal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Incorrect"
        message="The flag you entered is incorrect. Please try again."
      />
      <HintModal
        show={showHint}
        onClose={() => setShowHint(false)}
        title="Hint"
        message=" Use the first alphabet of each word."
        id={1}
      />
      <SuccessModal show={showSuccess} />
      <ConfirmationModal
        show={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={handleConfirmHint}
        title="Are you sure?"
        message="Viewing the hint will affect your points. Do you want to proceed?"
      />
    </>
  );
}
