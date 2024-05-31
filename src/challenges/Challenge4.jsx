import React,{useState} from "react";
import BackButton from "../components/BackButton";
import IncorrectModal from "../components/IncorrectModal"

export default function Challenge4() {
  const[userFlag,setUserFlag]=useState("");
  const [showModal, setShowModal] = useState(false);
  const answer = " soscCTF{byte}";
  function handleClick(){
     if(userFlag.trim().toLowerCase()===answer.toLowerCase())
      {
        progress=progress+1;
      }
      else{
        setShowModal(true);
      }
  }
 
  return (
    <>
    <div className="flex flex-col justify-start items-start w-full h-full">
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
          onChange={(e) => setUserFlag(e.target.value)}
        />
        <button
          className="outline outline-white mt-5 px-2 rounded-lg text-center w-full btn bg-black text-white"
          style={{ fontSize: "0.9rem" }}
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
    </div>
    <IncorrectModal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Incorrect"
        message="The flag you entered is incorrect. Please try again."
      />
    </>
  );
}
