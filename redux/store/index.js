import { quizeSlice } from "../features/QuizeSlice";

// const makeStore = () =>
//   configureStore({
//     reducer: {
//       [quizeSlice.name]: quizeSlice.reducer,
//     },
//   });

// export const wrapper = createWrapper(makeStore);
// j;

const store = configureStore({
  reducer: {
    [quizeSlice.name]: quizeSlice.reducer,
  },
});

export default store;
