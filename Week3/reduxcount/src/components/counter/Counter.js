import { useSelector, useDispatch } from "react-redux";
import {
  increament,
  decreament,
  incrementByAmount,
  reset,
} from "../../modules/counter/counterSlice";
import { useState } from "react";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;
  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  const addIt = (e) => {
    dispatch(setIncrementAmount(e.target.value));
  };
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increament())}>+</button>
        <button onClick={() => dispatch(decreament())}>-</button>
      </div>
      <div>
        <input
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Amount
        </button>
        <button onClick={resetAll}>reset</button>
      </div>
    </section>
  );
};
export default Counter;
