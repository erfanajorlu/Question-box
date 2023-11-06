import react, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQusetion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="border flex flex-col justify-center m-4 min-h-fit w-11/12 rounded-lg shadow-lg">
      <header className="px-6 h-16 items-center font-bold flex justify-between">
        <h4 className="lg:text-lg text-md">{title}</h4>
        <button className="text-purple-700 flex justify-center items-center bg-slate-400 lg:w-8 lg:h-8 w-6 h-6 rounded-full" onClick={()=>{setShowInfo(!showInfo)}}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo ? <p className="mx-auto w-11/12 text-slate-600 my-2 transition">{info}</p> : <></>}
    </article>
  );
};

export default SingleQusetion;
