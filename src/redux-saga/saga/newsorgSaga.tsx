import { put, call, take } from "redux-saga/effects";
import { fetchNewsorg } from "../../api";
import * as TYPE from "../actionType";
import * as url from "../../api/config";
import * as actions from "../actions";

function* getNewsorgData(location: string) {
  try {
    const res = yield call(fetchNewsorg, url.newsorgApi(location));
    yield put(actions.getNewsSuccess(res.articles));
  } catch (error) {
    yield put({ type: TYPE.REQUEST_NEWSORG_FAILED, error });
  }
}

export default function* newsorgSaga() {
  while (true) {
    const { location } = yield take(TYPE.REQUEST_NEWSORG);
    yield call(getNewsorgData, location);
  }
}
