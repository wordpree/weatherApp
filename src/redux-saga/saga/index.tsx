import { all, fork } from "redux-saga/effects";
import { googleDetailSaga, googleCompleteSaga } from "./googleSaga";
import openWeatherSaga from "./weatherSaga";
import newsorgSaga from "./newsorgSaga";
import sygicCollections from "./sygicSaga";

export default function* saga() {
  yield all([
    fork(googleDetailSaga),
    fork(googleCompleteSaga),
    fork(openWeatherSaga),
    fork(newsorgSaga),
    fork(sygicCollections)
  ]);
}
