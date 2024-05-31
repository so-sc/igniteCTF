import React from "react";
import BackButton from "../components/BackButton";

export default function Challenge4() {
  return (
    <div className="flex flex-col w-full h-full justify-between">
      <BackButton />
      <div className="flex flex-col w-full p-4 justify-between items-center ">
        <h1 className="mb-10">Challenge 4</h1>
        <p className="text-base text-justify">
          Julius Caesar was a great king but did he have a cipher named after
          him?
        </p>
        <div className="p-5 py-10 flex flex-col justify-center items-center">
          <p className="text-base text-justify ">Decrypt the given message:</p>
          <p className="text-base text-justify px-3 text-red-600">{`fbfpPGS{byq_vf_tbyq}`}</p>
        </div>

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
          // onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="outline outline-white mt-5 px-2 rounded-lg text-center w-full btn bg-black text-white"
          style={{ fontSize: "0.9rem" }}
          // onClick={handleNext}
        >
          Submit
        </button>
      </div>
    </div>
  );
}