import { put, call, take } from "redux-saga/effects";
import { fetchWeather } from "../../api";
import * as TYPE from "../actionType";
import * as url from "../../api/config";
import * as actions from "../actions";

function* weatherDetail(geo: string) {
  try {
    const res = yield call(fetchWeather, url.weatherApi(geo));
    yield put(actions.getWeatherSuccess({ ...res }));
  } catch (error) {
    yield put({ type: TYPE.REQUEST_WEATHER_FAILED, error });
  }
}

export default function* openWeatherSaga() {
  while (true) {
    const { geo } = yield take(TYPE.REQUEST_WEATHER);
    yield call(weatherDetail, geo);
  }
}
