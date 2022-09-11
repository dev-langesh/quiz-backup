import React from "react";
import { questions } from "../../models/questions";
import OptionButton from "./OptionButton";

export default function QuizContainer() {
  function clickHandler(e) {
    const isCorrect = questions[0].answers[e.target.id - 1].correctness;

    if (isCorrect) {
      console.log("correct");
    }
  }

  return (
    <>
      <h1 className="font-bold text-xl tracking-wide py-4 text-center">
        {questions[0].question}
      </h1>
      <section className="w-full sm:w-[300px] space-y-6">
        {questions[0].answers.map((ans) => {
          return (
            <OptionButton key={ans.id} clickHandler={clickHandler} id={ans.id}>
              {ans.name}
            </OptionButton>
          );
        })}
      </section>
    </>
  );
}
