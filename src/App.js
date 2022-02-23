import {useSelector, useDispatch} from "react-redux"
import {increaseCount, decreaseCount} from "./redux/redusers/actions/actionCreator"

function App() {
  const count = useSelector(store => store?.counter?.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increaseCount())}>
        Increase
      </button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decreaseCount())}>
        Decrease
      </button>
    </div>
  );
}

export default App;
