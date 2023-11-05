import React , {useState} from "react";
import SingleQuestion from './Question'
import data from './data'

function App() {
  const [questions , setQuestions] = useState(data);
  return (
    <div className="w-full h-screen bg-purple-800 flex justify-center items-center">
      <div className="w-1/2 border bg-white h-2/3 rounded-lg flex justify-between py-10">
        <div className="w-1/6 mx-16 ">
          <h1 className="text-lg font-bold">Questions And Answers About Login</h1>
        </div>
        <div>
          {questions.map((question)=>{
            return <SingleQuestion key={question.id} {...question}/>
          })}
        </div>
      </div>
   </div>
  );
}

export default App;