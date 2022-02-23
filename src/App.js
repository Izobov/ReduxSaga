import {useSelector, useDispatch} from "react-redux"
import {increaseCount, decreaseCount, getLatestNews} from "./redux/redusers/actions/actionCreator"

function App() {
  const count = useSelector(store => store?.counter?.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increaseCount())}>
        Increase
      </button>
      <button onClick={() => dispatch(decreaseCount())}>
        Decrease
      </button>
      <button onClick={() => dispatch(getLatestNews())}>
        Get News
      </button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
