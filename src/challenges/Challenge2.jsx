import React from "react";
import BackButton from "../components/BackButton";

export default function Challenge2() {
  return (
    <div className="flex flex-col justify-start items-start w-full h-full ml-3">
      <BackButton />

      <h1 className=" mb-10">Challenge 2</h1>
      <div>
        <p className="text-xl pb-5">Computers Speak the Language of 1's and 0's and so must you</p>
        <p className="text-base pb-5">01110011 01101111 01110011 01100011 01000011 01010100 01000110 01111011 01101001
01011111 00111100 00110011 01011111 01010011 01001111 01010011 01000011 01111101
00001010</p>
<p className="text-sm"><span className="text-green-400">Hint</span>: This is the binary representation of some text.</p>
      </div>
    </div>
  );
}
