import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/Counter/counterSlice";
// Here i exported counterSlice but importing as counterReducer.  So remember name assigned in slice for import

export const store = configureStore({
  reducer: {
    counter: counterReducer, // remember counter: counterReducer see below comments for my mistake
  },
});

// export const store = configureStore({
//   reducer: { counterReducer },
// });

// this file is first step in creating redux environment
// configureStore creates a store
// this store has to be exported in main.jsx or app.jsx, depends on how i choose or  basec on levels
//
