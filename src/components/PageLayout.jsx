import React from "react";
import "../styles/global.css";
import soscIcon from "../assets/sosc.svg";

export default function PageLayout({ children }) {
  return (
    <div className="h-screen w-screen md:max-w-screen-md flex flex-col">
      <img
        src={soscIcon}
        alt="Logo"
        width={50}
        className="absolute top-5 left-5"
      />
      <div className="h-28 flex" />
      <div className="flex flex-col w-auto flex-grow text-white text-3xl justify-center items-center">
        {children}
      </div>
      <div className="h-28 flex" />
    </div>
  );
}
