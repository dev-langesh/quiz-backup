import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { questions } from "../../models/questions";
import OptionButton from "./OptionButton";
import { increaseMark } from "../../src/features/markSlice";
import {
  getQuestionNumber,
  nextQuestion,
} from "../../src/features/questionCountSlice";

export default function QuizContainer() {
  const questionNumber = useSelector(getQuestionNumber);
  const [timer, setTimer] = useState(10);

  const effRan = useRef(false);

  useEffect(() => {
    if (effRan.current === true) {
      setInterval(() => {
        setTimer((prev) => {
          return prev - 1;
        });
      }, 1000);
    }

    return () => (effRan.current = true);
  }, []);

  useEffect(() => {
    if (timer < 0) {
      dispatch(nextQuestion());
      setTimer(10);
    }
  }, [timer]);

  const dispatch = useDispatch();

  function clickHandler(e) {
    const isCorrect = questions[0].answers[e.target.id - 1].correctness;

    if (isCorrect) {
      dispatch(increaseMark());
    }

    dispatch(nextQuestion());
  }

  return (
    <>
      <h1>{timer}</h1>
      <h1 className="font-bold text-md sm:text-xl tracking-wide py-4 text-center">
        {questions[questionNumber].question}
      </h1>
      <section className="w-full sm:w-[300px] space-y-6">
        {questions[questionNumber].answers.map((ans) => {
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
