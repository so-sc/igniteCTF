import React, { useContext, useEffect } from "react";
import { ChallengeContext } from "./ProgressContext";

export default function HintModal({ show, onClose, title, message, id }) {
  const { useHint } = useContext(ChallengeContext);

  useEffect(() => {
    if (show) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
      if (id) useHint(id);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show, id]);
  if (!show) return null;

  return (
    <div className="absolute bg-gray-600 bg-opacity-50 h-full w-full flex justify-center items-center top-0 overflow-hidden ">
      <div className="m-5 py-6 border shadow-lg rounded-md bg-white w-11/12 max-w-md text-center mb-64">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {title}
          </h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">{message}</p>
          </div>
          <div className="items-center px-4 py-3">
            <button
              className="px-4 py-2 bg-gray-800 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-600"
              onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
