import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../App/features/Counter/counterSlice";
const Counter = () => {
  // Reading data or selecting data from store using useSelector
  const count = useSelector((state) => state.counter.value);

  // Changing the data by using dispatch
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};
export default Counter;
