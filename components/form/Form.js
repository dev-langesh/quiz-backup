import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function Form() {
  const [state, setState] = useState({
    name: "",
    rollNo: null,
  });
  const [error, setError] = useState("");

  function changeHandler(e) {
    setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  function submitHandler(e) {
    e.preventDefault();

    if (!state.name || !state.rollNo) {
      return setError("Fill All The Fields");
    }
  }

  return (
    <section className=" bg-gray-900 text-white h-screen w-screen flex items-center justify-center">
      <main className="space-y-4 p-6 shadow-2xl shadow-black rounded">
        <h1 className="text-center text-2xl font-bold font-slab tracking-wide ">
          Register
        </h1>
        <form
          onSubmit={submitHandler}
          className="p-2  flex items-center justify-center flex-col space-y-5"
        >
          <Input
            changeHandler={changeHandler}
            name="name"
            placeholder="Name"
            value={state.name}
          />
          <Input
            changeHandler={changeHandler}
            name="rollNo"
            placeholder="Roll No"
            value={state.rollNo}
          />
          <Button>Submit</Button>
        </form>
      </main>
    </section>
  );
}
