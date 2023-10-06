import { configureStore } from "@reduxjs/toolkit";
import { quizeSlice } from "../features/QuizeSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      [quizeSlice.name]: quizeSlice.reducer,
    },
  });

export const wrapper = createWrapper(makeStore);
