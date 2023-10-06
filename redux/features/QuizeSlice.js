import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// initial State
const initialState = {
  quizeQuestion: null,
  optionData: [],
};

export const quizeSlice = createSlice({
  name: "Quize",
  initialState,
  reducers: {
    // setting up all questions data
    setQuizeQuestions(state, action) {
      state.quizeQuestion = action.payload;
    },
    // setting up junbled options
    setOptionData(state, action) {
      state.optionData = action.payload;
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

export const { setQuizeQuestions, setOptionData } = quizeSlice.actions;
