import { Alert, CircularProgress, Snackbar } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function Form() {
  const [state, setState] = useState({
    name: "",
    rollNo: "",
  });
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  function changeHandler(e) {
    setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function submitHandler(e) {
    e.preventDefault();

    if (!state.name || !state.rollNo) {
      setError("Fill All The Fields");
      setOpen(true);
      return;
    }

    setLoading(true);

    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify(state),
    });

    const data = await response.json();

    setLoading(false);

    if (data.error) {
      setError(data.error);
      setOpen(true);
      return;
    } else {
      router.push("/quiz");
    }
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <section className=" bg-gray-900 text-white h-screen w-screen flex items-center justify-center">
      {loading ? (
        <CircularProgress />
      ) : (
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
      )}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
    </section>
  );
}
