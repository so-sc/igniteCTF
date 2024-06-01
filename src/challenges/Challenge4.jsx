import React, { useContext, useState } from "react";
import BackButton from "../components/BackButton";
import IncorrectModal from "../components/IncorrectModal";
import HintModal from "../components/HintModal";
import { ChallengeContext } from "../components/ProgressContext";

export default function Challenge4() {
  const [userFlag, setUserFlag] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const user = localStorage.getItem("USER");
  const [isComplete, setIsComplete] = useState(
    JSON.parse(localStorage.getItem(`${user}_DATA`)).c.c4
  );
  const answer = "igniteCTF{old_is_gold}";

  const { completeChallenge } = useContext(ChallengeContext);

  function handleClick() {
    if (userFlag.trim().toLowerCase() === answer.toLowerCase()) {
      // progress = progress + 1;
      completeChallenge(4); //challenge number
    } else {
      setShowModal(true);
    }
  }

  return (
    <>
      <div className="flex flex-col justify-start items-start w-full h-full">
        <BackButton />
        <div className="flex flex-col w-full p-4 justify-between items-center ">
          <h1 className="mb-10">Challenge 4</h1>
          <p className="text-base text-justify">
            Julius Caesar was a great king but did he have a cipher named after
            him?
          </p>
          <div className="p-5 py-10 flex flex-col justify-center items-center">
            <p className="text-base text-justify ">
              Decrypt the given message:
            </p>
            <p className="text-base text-justify px-3 text-red-600">{`fbfpPGS{byq_vf_tbyq}`}</p>
          </div>

          <p className="text-sm text-justify px-3 mt-5">
            {`Use the word as the flag in the format:`}
          </p>
          <p className="text-sm text-justify px-3 text-teal-500">{`XXXXXXX{XXXX}`}</p>
          <div className="mt-5 rounded-lg text-center bg-green-500 text-white" onClick={() => setShowHint(true)}>
            <p className="text-sm px-4 py-2 cursor-pointer">HINT</p>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center ">
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
        message=" Try finding ROT13 decryptors online and use shift 13"
      />
    </>
  );
}
