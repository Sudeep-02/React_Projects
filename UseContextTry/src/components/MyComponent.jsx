// MyComponent.js

import { useContext } from "react";
import MyContext from "./MyContext";

const MyComponent = () => {
  // Consume the context using useContext hook
  const { message, count, incrementCount } = useContext(MyContext);

  return (
    <div>
      <h2>{message}</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
};

export default MyComponent;
