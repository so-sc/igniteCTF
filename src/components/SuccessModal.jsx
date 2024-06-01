import React, { useEffect } from "react";
import Flag from "../assets/flag.svg";
import ConfettiBottom from "./ConfettiBottom";
import { useNavigate } from "react-router-dom";

export default function SuccessModal({ show }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (show) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);
  if (!show) return null;
  function onClose() {
    navigate("/");
  }

  return (
    <div className="absolute bg-gray-600 bg-opacity-50 h-full top-0 w-full flex justify-center items-center">
      <div className="m-5 py-6 border shadow-lg rounded-md bg-white w-11/12 max-w-md text-center">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          You Captured the Flag!
        </h3>
        <div className="px-7 py-3 flex justify-center items-center">
          <img src={Flag} className="w-20" />
        </div>
        <div className="items-center px-4 pt-3">
          <button
            className="px-4 py-2 bg-gray-800 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
      <ConfettiBottom />
    </div>
  );
}
