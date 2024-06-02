// ConfirmationModal.jsx
import React from "react";

const ConfirmationModal = ({ show, onClose, onConfirm, title, message }) => {
  if (!show) return null;

  return (
    <div className="fixed w-full h-full flex items-center justify-center  bg-opacity-50 top-0 text-black bg-black">
      <div className="bg-white rounded-lg p-4 w-11/12 max-w-md text-black ">
        <h2 className="text-xl  mb-4">{title}</h2>
        <p className="mb-6 text-sm">{message}</p>
        <div className="flex justify-end">
          <button
            className="mr-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 text-sm"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
