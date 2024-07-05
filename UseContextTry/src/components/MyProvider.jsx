// MyProvider.js

import { useState } from "react";
import MyContext from "./MyContext.js";

const MyProvider = ({ children }) => {
  // Define your context value
  const contextValue = {
    message: "Hello from Context!",
    count: 5,
    incrementCount: () => {
      // Define a function to increment count
      setCount((prevCount) => prevCount + 1);
    },
  };

  // State to manage count
  const [count, setCount] = useState(0);

  return (
    <MyContext.Provider value={{ ...contextValue, count }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
