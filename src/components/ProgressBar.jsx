import React from "react";

export default function ProgressBar({ progress }) {
  progress = progress > 5 ? 5 : progress;
  let width = (progress - 1) * 25;
  width = width < 0 ? 0 : width;

  return (
    <div className="w-10/12 relative">
      <div className="w-full bg-gray-200 rounded-full h-2 relative">
        <div
          className="bg-green-400 h-2 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${width}%` }}
        />
      </div>
      <div
        className={`absolute left-0 -ml-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-200 rounded-full transition-all duration-1000 z-10 ${
          progress > 0 ? "bg-green-600" : ""
        }`}
      ></div>
      <div
        className={`absolute left-1/4 -ml-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-200 rounded-full transition-all duration-1000 z-10 ${
          progress > 1 ? "bg-green-600" : ""
        }`}
      ></div>
      <div
        className={`absolute left-2/4 -ml-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-200 rounded-full transition-all duration-1000 z-10 ${
          progress > 2 ? "bg-green-600" : ""
        }`}
      ></div>
      <div
        className={`absolute left-3/4 -ml-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-200 rounded-full transition-all duration-1000 z-10 ${
          progress > 3 ? "bg-green-600" : ""
        }`}
      ></div>
      <div
        className={`absolute right-0 -mr-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-200 rounded-full transition-all duration-1000 z-10 ${
          progress > 4 ? "bg-green-600" : ""
        }`}
      ></div>
    </div>
  );
}
