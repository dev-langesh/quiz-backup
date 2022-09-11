import React, { useEffect, useRef, useState } from "react";
import QuizContainer from "../components/quiz/QuizContainer";

export default function Quiz() {
  const [error, setError] = useState(false);
  const effRan = useRef(false);

  useEffect(() => {
    if (effRan.current) {
      let user = window.localStorage.getItem("user");
      user = JSON.parse(user);
      console.log(user);
      if (!user.name) {
        setError(true);
      }
    }

    return () => (effRan.current = true);
  }, []);

  return (
    <section className=" bg-gray-900 text-white h-screen w-screen flex items-center justify-center flex-col space-y-6">
      <main className="space-y-4 p-8 shadow-2xl shadow-black rounded flex flex-col items-center justify-center">
        {error ? <h1>Register and try again!</h1> : <QuizContainer />}
      </main>
    </section>
  );
}
