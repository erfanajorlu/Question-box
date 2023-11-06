import React , {useState} from "react";
import SingleQuestion from './Question'
import data from './data'

function App() {
  const [questions , setQuestions] = useState(data);
  return (
    <div className="w-full min-h-screen bg-purple-800 flex justify-center items-center">
      <div className="lg:w-1/2 w-5/6 border bg-white min-h-fit rounded-lg lg:flex justify-between lg:py-10 py-4">
        <div className="lg:w-1/6 w-ful lg:ml-16 lg:mr-8 ml-6 mr-4 my-2">
          <h1 className="lg:text-lg text-md font-bold">Questions And Answers About Login</h1>
        </div>
        <div className="lg:w-5/6 w-full">
          {questions.map((question)=>{
            return <SingleQuestion key={question.id} {...question}/>
          })}
        </div>
      </div>
   </div>
  );
}

export default App;