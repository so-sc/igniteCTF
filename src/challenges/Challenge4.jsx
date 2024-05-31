import React from "react";
import BackButton from "../components/BackButton";

export default function Challenge4() {
 
  return (
    <>
     <div className="flex flex-col justify-start items-start w-full h-full ml-3" >
      <BackButton />
      <h1 className=" mb-10">Challenge 4</h1>
    <div>
    <p className="text-xl pb-5">Julius Caesar was a great king but did he have a cipher named after him? Decrypt the given message :<span className="text-red-400"> fbfpPGS{'{byq_vf_tbyq}'}</span></p>
    <p className="text-sm"><span className="text-green-400">Hint </span>: Try finding ROT13 decryptors online and use shift 13</p>
    </div>
    <div>
    <input
        id="name-input"
        className="rounded-lg bg-slate-900 outline-none pl-3 mt-5 w-64"
        placeholder="Enter Flag"
        style={{ fontSize: "0.9rem" }}
        onChange={(e) => setUserflag(e.target.value)}
      />
    </div>
    </div>
    </>
  );
}
