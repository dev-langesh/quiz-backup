import React from "react";
import { useSelector } from "react-redux";
import { getMarks } from "../src/features/markSlice";

export default function result() {
  const result = useSelector(getMarks);

  return (
    <section className=" bg-gray-900 text-white h-screen w-screen flex items-center justify-center flex-col space-y-6">
      <main className="space-y-4 p-8 shadow-2xl shadow-black rounded flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold font-slab tracking-widest">
          Congrats!
        </h1>
        <p>You have completed the quiz successfully</p>
        <p>Correct Answers : {result.correctAnswers}</p>
        <p>Score : {result.score}</p>
      </main>
    </section>
  );
}
