import { GET_LATEST_NEWS, INCREASE_COUNT } from "../redusers/constans";
import {takeEvery, put, call} from "@redux-saga/core/effects"
import { getLatestNews } from "../../api";
import { setLatestNews } from "../redusers/actions/actionCreator";


export function* handleLatetsNews() {
    const {hits} = yield call(getLatestNews, "react");
    yield put(setLatestNews(hits))
}
export function* watchClickSaga() {
    yield takeEvery(GET_LATEST_NEWS, handleLatetsNews)
   
}

export default function* rootSaga() {
  yield watchClickSaga();
}
