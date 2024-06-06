import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import BackButton from "../components/BackButton";
import SOSC from "../assets/SOSC.png";
import { toPng } from "html-to-image";
import IncorrectModal from "../components/IncorrectModal";
import HintModal from "../components/HintModal";
import { ChallengeContext } from "../components/ProgressContext";
import SuccessModal from "../components/SuccessModal";
import ConfirmationModal from "../components/ConfirmationModal";

export default function Challenge3() {
  const imageRef = useRef(null);
  const [isLoading, setisLoading] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1K4p30uobgZzjCOV7Hx7qe50Yn27Ymgxj";
    link.download = "image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setisLoading(true);
    setTimeout(() => {
      setisLoading(false);
    }, 3000);
  };

  const [userFlag, setUserFlag] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isComplete, setIsComplete] = useState(null);
  const answer = "igniteCTF{our_tiny_little_secret}";

  const { completeChallenge, userData } = useContext(ChallengeContext);

  useEffect(() => {
    if (!userData) return;
    setIsComplete(userData.c.c3);
  }, [userData]);

  function handleClick() {
    if (userFlag.trim().toLowerCase() === answer.toLowerCase()) {
      // progress = progress + 1;
      completeChallenge(3); //challenge number
      setShowSuccess(true);
    } else {
      setShowModal(true);
    }
  }
  const handleHintClick = () => {
    setShowConfirmation(true); // Show confirmation modal when hint button is clicked
  };

  const handleConfirmHint = () => {
    // Logic to show the hint and deduct points
    setShowConfirmation(false);
    setShowHint(true);
    console.log("Hint viewed, points deducted.");
  };
  return (
    <>
      <div className="flex flex-col w-full h-full justify-between">
        <BackButton />
        <div className="flex flex-col w-full p-4 justify-between items-center ">
          <h1 className="mb-10">Challenge 3</h1>
          <p className="text-base text-justify">
            A picture is worth a thousand words.... But some pictures hold
            secrets hidden in them, try finding them.
          </p>
          <img
            ref={imageRef}
            className="w-full h-auto py-5"
            src={SOSC}
            alt="Youtube"
          />
          <button
            className="outline outline-white mt-5 px-2 rounded-lg text-center w-full btn bg-black text-white"
            onClick={handleDownload}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="loading loading-dots loading-md" />
            ) : (
              "Download"
            )}
          </button>
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
        <div className="flex flex-col w-full px-5 justify-center items-center">
          <input
            id="answer"
            className={`rounded-lg bg-slate-900 outline-none pl-3 w-full py-1 ${
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
        message="ll images have hidden information called metadata, try finding a metadata viewer. "
        id={3}
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
