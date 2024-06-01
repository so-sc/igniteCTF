import React, { useContext, useState } from "react";
import BackButton from "../components/BackButton";
import ClipBoard from "../assets/clipboard.svg";
import IncorrectModal from "../components/IncorrectModal";
import HintModal from "../components/HintModal";
import { ChallengeContext } from "../components/ProgressContext";
import SuccessModal from "../components/SuccessModal";

export default function Challenge2() {
  const textToCopy =
    "01101001 01100111 01101110 01101001 01110100 01100101 01000011 01010100 01000110 01111011 01101001 01011111 00111100 00110011 01011111 01010011 01001111 01010011 01000011 01111101";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      console.log("Text copied to clipboard successfully:", textToCopy);
    } catch (error) {
      console.error("Error copying text to clipboard:", error);
    }
  };

  const [userFlag, setUserFlag] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const user = localStorage.getItem("USER");
  const [isComplete, setIsComplete] = useState(
    JSON.parse(localStorage.getItem(`${user}_DATA`)).c.c2
  );
  const answer = "igniteCTF{i_<3_SOSC}";

  const { completeChallenge } = useContext(ChallengeContext);

  function handleClick() {
    if (userFlag.trim().toLowerCase() === answer.toLowerCase()) {
      // progress = progress + 1;
      completeChallenge(2); //challenge number
      setShowSuccess(true);
    } else {
      setShowModal(true);
    }
  }

  return (
    <>
      <div className="flex flex-col w-full h-full justify-between">
        <BackButton />

        <div className="flex flex-col w-full p-4 justify-between items-center ">
          <h1 className="mb-10">Challenge 2</h1>
          <p className="text-base text-justify">
            Computers Speak the Language of 1's and 0's and so must you...
          </p>

          <div className="w-full h-10 bg-slate-800 mt-4 rounded-tr-xl rounded-tl-xl flex items-center justify-end">
            <div
              className="mr-3 btn btn-link"
              style={{
                backgroundImage: `url(${ClipBoard})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              onClick={copyToClipboard}
            />
          </div>

          <p className="text-base font-mono bg-slate-900 p-2 py-4 rounded-br-xl rounded-bl-xl text-center text-slate-300">
            01110011 01101111 01110011 01100011 01000011 01010100 01000110
            01111011 01101001 01011111 00111100 00110011 01011111 01010011
            01001111 01010011 01000011 01111101 00001010
          </p>
          <p className="text-sm text-justify px-3 mt-5">
            {`Use the word as the flag in the format:`}
          </p>
          <p className="text-sm text-justify px-3 text-teal-500">{`XXXXXXX{XXXX}`}</p>
          <div
            className="mt-5 rounded-lg text-center bg-green-500 text-white"
            onClick={() => setShowHint(true)}
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
        message="  This is the binary representation of some text."
        id={2}
      />
      <SuccessModal show={showSuccess} />
    </>
  );
}
