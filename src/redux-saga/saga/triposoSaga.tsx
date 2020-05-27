import { fetchTriposo } from "../../api";
import * as url from "../../api/config";
import { call, takeLatest, put } from "redux-saga/effects";
import {
  reqTriposoPopularPoiSuccess,
  reqTriposoPopularPoiFailed,
  reqTriposoLocationFailed,
  reqTriposoLocationSuccess,
  reqTriposoCitiesSuccess,
  reqTriposoCitiesFailed,
  reqTriposoTourSuccess,
  reqTriposoTourFailed,
} from "../actions";
import {
  REQUEST_TRIPOSO_POPULAR_POI,
  REQUEST_TRIPOSO_LOCATION,
  REQUEST_TRIPOSO_CITIES,
  REQUEST_TRIPOSO_TOURS,
  ITriposoToursReq,
} from "../actionType";

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

function* getTopCitiesData() {
  try {
    const cities = yield call(fetchTriposo, url.triposoCities());
    yield put(reqTriposoCitiesSuccess(cities.results));
  } catch (error) {
    yield put(reqTriposoCitiesFailed(error));
  }
}

function* getToursData({ city }: ITriposoToursReq) {
  try {
    const tours = yield call(fetchTriposo, url.triposoTours(city));
    yield put(reqTriposoTourSuccess(tours.results, city));
  } catch (error) {
    yield put(reqTriposoTourFailed(error));
  }
}

export function* triposoPopularSaga() {
  yield takeLatest(REQUEST_TRIPOSO_POPULAR_POI, getPopularData);
}

export function* triposoLocationSaga() {
  yield takeLatest(REQUEST_TRIPOSO_LOCATION, getLocationData);
}

export function* triposoTopCitiesSaga() {
  yield takeLatest(REQUEST_TRIPOSO_CITIES, getTopCitiesData);
}

export function* triposoToursSaga() {
  yield takeLatest(REQUEST_TRIPOSO_TOURS, getToursData);
}
