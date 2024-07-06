import { createSlice } from "@reduxjs/toolkit";

// const initialState = { value: 5 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

//initialState: initialState,   here initialState can be written in many ways
// initialState:initialState, which is same as initialstate,
// Another way is to define state in initialState

// // here function has state and actions in parameters stae is data and actions is manipulating orders

export const { increment, decrement } = counterSlice.actions; // Remember to use 'S' after 'action' and 'CONST' because 'increment' and 'decrement' are part of 'counterSlice'.
// They are not separate functions, so use 'const' after destructuring 'counterSlice.actions'.

//Why export them? We need these functions or reducers in app.jsx or main.js to perform operations on input values.

export default counterSlice.reducer; // Why export this? Because we need to report our reducer to the store; otherwise, the store won't know how many reducer there are in slices.
// these import is used in APP/store.js and inside reducer:

// When using above export remeber when we import it will be name(it is name in slice) nameReducer in store.js
