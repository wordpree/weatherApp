import { fetchTriposo } from "../../api";
import * as url from "../../api/config";
import { call, takeLatest, put } from "redux-saga/effects";
import {
  reqTriposoPoiSuccess,
  reqTriposoPoiFailed,
  reqTriposoPopularPoiSuccess,
  reqTriposoPopularPoiFailed,
  reqTriposoLocationFailed,
  reqTriposoLocationSuccess,
  reqTriposoCitiesSuccess,
  reqTriposoCitiesFailed,
} from "../actions";
import {
  REQUEST_TRIPOSO_POI,
  ITriposoPoiReq,
  REQUEST_TRIPOSO_POPULAR_POI,
  REQUEST_TRIPOSO_LOCATION,
  REQUEST_TRIPOSO_CITIES,
} from "../actionType";

function* getTriposoData({ geo, tagLabel }: ITriposoPoiReq) {
  try {
    const res = yield call(fetchTriposo, url.triposoPois(geo, tagLabel));
    yield put(reqTriposoPoiSuccess(res.results));
  } catch (error) {
    yield put(reqTriposoPoiFailed(error));
  }
}

function* getPopularData() {
  try {
    const res = yield call(fetchTriposo, url.triposePopular());
    yield put(reqTriposoPopularPoiSuccess(res.results));
  } catch (error) {
    yield put(reqTriposoPopularPoiFailed(error));
  }
}
function* getLocationData() {
  try {
    const islands = yield call(fetchTriposo, url.triposoLocation("island"));
    const parks = yield call(
      fetchTriposo,
      url.triposoLocation("national_park")
    );
    yield put(reqTriposoLocationSuccess(islands.results, parks.results));
  } catch (error) {
    yield put(reqTriposoLocationFailed(error));
  }
}

function* getCitiesData() {
  try {
    const cities = yield call(fetchTriposo, url.triposeCities());
    yield put(reqTriposoCitiesSuccess(cities.results));
  } catch (error) {
    yield put(reqTriposoCitiesFailed(error));
  }
}

export function* triposoPoiSaga() {
  yield takeLatest(REQUEST_TRIPOSO_POI, getTriposoData);
}

export function* triposoPopularSaga() {
  yield takeLatest(REQUEST_TRIPOSO_POPULAR_POI, getPopularData);
}

export function* triposoLocationSaga() {
  yield takeLatest(REQUEST_TRIPOSO_LOCATION, getLocationData);
}

export function* triposoCitiesSaga() {
  yield takeLatest(REQUEST_TRIPOSO_CITIES, getCitiesData);
}
