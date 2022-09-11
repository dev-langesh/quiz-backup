import { configureStore } from "@reduxjs/toolkit";
import questionCountReducer from "../features/questionCountSlice";
import markReducer from "../features/markSlice";

export const store = configureStore({
  reducer: {
    questionNumber: questionCountReducer,
    marks: markReducer,
  },
});
