import { put, call, take, takeLatest } from "redux-saga/effects";
import { fetchGooglePlace } from "../../api";
import * as TYPE from "../actionType";
import * as url from "../../api/config";
import * as actions from "../actions";

function* googlePlaceDetail(placeId: string) {
  try {
    const res = yield call(fetchGooglePlace, url.googlePlaceDetail(placeId));
    yield put(actions.getGooglePlaceDetailSuccess(res.result));
  } catch (error) {
    yield put({ type: TYPE.REQUEST_G_PLACE_DETAIL_FAILED, error });
  }
}

function* googleAutoComplete(input: string) {
  try {
    const res = yield call(fetchGooglePlace, url.googleAutoComplete(input));
    yield put(actions.getGoogleAutoCompleteSuccess(res.predictions));
  } catch (error) {
    yield put({ type: TYPE.REQUEST_G_AUTO_COMPLETE_FAILED, error });
  }
}

export function* googleCompleteSaga() {
  while (true) {
    const { input } = yield take(TYPE.REQUEST_G_AUTO_COMPLETE);
    yield call(googleAutoComplete, input);
  }
}
export function* googleDetailSaga() {
  while (true) {
    const { placeId } = yield take(TYPE.REQUEST_G_PLACE_DETAIL);
    yield call(googlePlaceDetail, placeId);
  }
}

function* fetchGoogleTextsearch({ country }: TYPE.IReqGoogleTextsearch) {
  try {
    const res = yield call(fetchGooglePlace, url.googleTextsearch(country));
    yield put(actions.reqGoogleSearchTextSuccess(res.results));
  } catch (error) {
    put(actions.reqGoogleSearchTextFailed(error));
  }
}

export function* textsearchSaga() {
  yield takeLatest(TYPE.REQUEST_G_PLACE_POI, fetchGoogleTextsearch);
}
