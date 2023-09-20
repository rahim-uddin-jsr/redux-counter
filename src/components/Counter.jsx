import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/features/counter/counterSlice";

const Counter = () => {
  //   const [count, setCount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Simple counter</h1>
      <h2>{count}</h2>
      <div className="card">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <br />
        <br />
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Increment By 5
        </button>
      </div>
    </>
  );
};

export default Counter;
