import { createSlice } from "@reduxjs/toolkit";

const markSlice = createSlice({
  name: "marks",
  initialState: { marks: 0, correctAnswers: 0 },
  reducers: {
    increaseMark: (state) => {
      state.marks += 5;
      state.correctAnswers += 1;
    },
  },
});

export const { increaseMark } = markSlice.actions;

export const getMarks = (state) => state.marks;

export default markSlice.reducer;
