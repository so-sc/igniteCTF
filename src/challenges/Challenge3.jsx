import React from "react";
import BackButton from "../components/BackButton";

export default function Challenge3() {
  return (
    <div className="flex flex-col justify-start items-start w-full h-full ml-3">
      <BackButton />

      <h1 className=" mb-10">Challenge 3</h1>
      <p className="text-xl pb-5">A picture is worth a thousand words.... But some pictures hold secrets hidden in them, try
      finding them.(download the image from the link below)</p>
      <p className="text-sm"><span className="text-green-400">Hint </span>: All images have hidden information called metadata, try finding a metadata viewer.</p>
    </div>
  );
}
