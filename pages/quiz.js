import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import QuizContainer from "../components/quiz/QuizContainer";

export default function Quiz() {
  const [error, setError] = useState("");
  const effRan = useRef(false);

  const router = useRouter();

  useEffect(() => {
    if (effRan.current) {
      let id = window.localStorage.getItem("id");
      let isStarted = window.localStorage.getItem("started");

      console.log(isStarted);

      if (!id) {
        router.push("/");
      }

      if (isStarted) setError("You have already done the quiz!");
      window.localStorage.setItem("started", "true");
    }

    return () => (effRan.current = true);
  }, []);

  return (
    <section className=" bg-gray-900 text-white h-screen w-screen flex items-center justify-center flex-col space-y-6">
      <main className="space-y-4 p-8 shadow-2xl shadow-black rounded flex flex-col items-center justify-center">
        {error ? (
          <h1 className="font-bold text-center tracking-wider">{error}</h1>
        ) : (
          <QuizContainer />
        )}
      </main>
    </section>
  );
}
