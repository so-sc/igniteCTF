import React from "react";
import BackButton from "../components/BackButton";

export default function Challenge1() {
  return (
    <>
    <div className="flex flex-col justify-start items-start w-full h-full ml-3">
      <BackButton />
      <h1 className=" mb-10">Challenge 1</h1> 
      <div>
        <p className="text-xl pb-5">Find the flag in the characters of the words represented by the letters of the following images:
        Use the word as the flag in the format <span className="text-red-400">soscCTF{'{XXXX}'}</span>.</p>
        <p className="text-sm"><span className="text-green-400">Hint</span> : Use the first alphabet of each word.</p>
      </div>
    </div>
    </>
  );
}
