import React from "react";
import OptionButton from "../components/quiz/OptionButton";
import QuizContainer from "../components/quiz/QuizContainer";

export default function Quiz() {
  return (
    <section className=" bg-gray-900 text-white h-screen w-screen flex items-center justify-center flex-col space-y-6">
      <main className="space-y-4 p-8 shadow-2xl shadow-black rounded flex flex-col items-center justify-center">
        <QuizContainer />
      </main>
    </section>
  );
}
