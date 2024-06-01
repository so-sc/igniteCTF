import React, { useCallback, useRef, useState } from "react";
import BackButton from "../components/BackButton";
import SOSC from "../assets/SOSC.png";
import { toPng } from "html-to-image";
import IncorrectModal from "../components/IncorrectModal";

export default function Challenge3() {
  const imageRef = useRef(null);
  const [isLoading, setisLoading] = useState(false);

  const handleDownload = useCallback(() => {
    if (imageRef.current === null) {
      return;
    }

    toPng(imageRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "image.png";
        link.href = dataUrl;
        link.click();
        setisLoading(true);
        setTimeout(() => {
          setisLoading(false);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [imageRef]);

  const [userFlag, setUserFlag] = useState("");
  const [showModal, setShowModal] = useState(false);
  const answer = "  soscCTF{our_tiny_little_secret} ";
  function handleClick() {
    if (userFlag.trim().toLowerCase() === answer.toLowerCase()) {
      progress = progress + 1;
    } else {
      setShowModal(true);
    }
  }
  return (
    <>
      <div className="flex flex-col w-full h-full justify-between ml-3">
        <BackButton />
        <div className="flex flex-col w-full p-4 justify-between items-center ">
          <h1 className="mb-10">Challenge 3</h1>
          <p className="text-base text-justify">
            A picture is worth a thousand words.... But some pictures hold
            secrets hidden in them, try finding them.
          </p>
          <img
            ref={imageRef}
            className="max-w-full h-auto py-5"
            src={SOSC}
            alt="Youtube"
          />
          <button
            className="text-center btn text-black"
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
          <p className="text-sm text-justify px-3 text-teal-500">{`XXXXXXX{XXXX}`}</p>
        </div>
        <div className="flex flex-col w-full p-4 justify-center items-center ">
          <input
            id="answer"
            className="rounded-lg bg-slate-900 outline-none pl-3 mt-3 w-full py-1"
            placeholder="Answer"
            style={{ fontSize: "0.9rem" }}
            onChange={(e) => setUserFlag(e.target.value)}
          />
          <button
            className="outline outline-white mt-5 rounded-lg text-center w-full btn bg-black text-white"
            style={{ fontSize: "0.9rem" }}
            onClick={handleClick}
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
    </>
  );
}
