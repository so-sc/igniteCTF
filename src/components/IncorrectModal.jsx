import React from 'react';

function Modal({ show, onClose, title, message }) {
  if (!show) return null;

  return (
    <div className="fixed  flex items-center justify-center bg-black bg-opacity-50 mb-64">
      <div className="bg-white rounded-lg shadow-lg p-4 bg-gray-500  mb-64">
        <h2 className="text-xl ">{title}</h2>
        <p className='text-sm'>{message}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-2 py-2 rounded text-sm" >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
