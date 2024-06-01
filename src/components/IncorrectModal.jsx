import React from "react";

function Modal({ show, onClose, title, message }) {
  if (!show) return null;

  return (
    <div className="fixed px-5 flex items-center justify-center  bg-opacity-50 mb-64  text-black">
      <div className="bg-white shadow-lg rounded-lg  p-4  mb-64">
        <h2 className="text-xl ">{title}</h2>
        <p className="text-sm">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-2 py-2 rounded text-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
