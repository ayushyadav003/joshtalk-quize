import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// initial State
const initialState = {
  quizeQuestion: null,
};

export const quizeSlice = createSlice({
  name: "Quize",
  initialState,
  reducers: {
    // set input value action
    setQuizeQuestions(state, action) {
      state.quizeQuestion = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.movie,
      };
    },
  },
});

export const { setQuizeQuestions } = movieDetailSlice.actions;
