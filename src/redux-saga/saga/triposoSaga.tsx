import { fetchTriposo } from "../../api";
import * as url from "../../api/config";
import { call, takeLatest, put } from "redux-saga/effects";
import { reqTriposoPoiSuccess, reqTriposoPoiFailed } from "../actions";
import { REQUEST_TRIPOSO_POI, ITriposoPoiReq } from "../actionType";

function* getTriposoData({ geo, tagLabel }: ITriposoPoiReq) {
  try {
    const res = yield call(fetchTriposo, url.triposoPois(geo, tagLabel));
    yield put(reqTriposoPoiSuccess(res.results));
  } catch (error) {
    yield put(reqTriposoPoiFailed(error));
  }
}

export default function* triposoPoiSaga() {
  yield takeLatest(REQUEST_TRIPOSO_POI, getTriposoData);
}
