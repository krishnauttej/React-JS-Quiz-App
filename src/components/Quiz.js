import "../App.css";
import { Questions } from "../helpers/Questions";
import { useState } from "react";

import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [colA,setcolA]=useState(true);
  const [colB,setcolB]=useState(true);
  const [colC,setcolC]=useState(true);
  const [colD,setcolD]=useState(true);


  const { score, setScore, gameState, setGameState } = useContext(
    GameStateContext
  );

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
            setcolD(true)
            setcolB(true)
            setcolC(true)
            setcolA(true)
           console.log(Questions[currentQuestion],Questions[currentQuestion].asnwer);
    if (Questions[currentQuestion].asnwer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
            setcolD(true)
            setcolB(true)
            setcolC(true)
            setcolA(true)
    if (Questions[currentQuestion].asnwer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="questions">
        <button  style={{ color:!colA ?"red":''}}
          onClick={() => {
            setcolA(!colA)
            setcolB(true)
            setcolC(true)
            setcolD(true)
            chooseOption("optionA");
          }}
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button style={{ color:!colB ?"red":''}}
          onClick={() => {
            setcolB(!colB)
            setcolA(true)
            setcolC(true)
            setcolD(true)
            chooseOption("optionB");
          }}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button style={{ color:!colC ?"red":''}}
          onClick={() => {
            setcolC(!colC)
            setcolB(true)
            setcolA(true)
            setcolD(true)
            chooseOption("optionC");
          }}
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button style={{ color:!colD ?"red":''}}
          onClick={() => {
            setcolD(!colD)
            setcolB(true)
            setcolC(true)
            setcolA(true)
            chooseOption("optionD");
          }}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>

      {currentQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )}
    </div>
  );
}

export default Quiz;
