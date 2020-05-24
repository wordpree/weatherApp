import { all, fork } from "redux-saga/effects";
import {
  googleDetailSaga,
  googleCompleteSaga,
  textsearchSaga,
} from "./googleSaga";
import openWeatherSaga from "./weatherSaga";
import newsorgSaga from "./newsorgSaga";
import {
  triposoPoiSaga,
  triposoPopularSaga,
  triposoLocationSaga,
  triposoCitiesSaga,
} from "./triposoSaga";
import {
  zCollectionSaga,
  zCitySaga,
  zDetailSaga,
  zCuisineSaga,
} from "./zomatoSaga";

export default function* saga() {
  yield all([
    fork(googleDetailSaga),
    fork(googleCompleteSaga),
    fork(textsearchSaga),
    fork(openWeatherSaga),
    fork(newsorgSaga),
    fork(zCollectionSaga),
    fork(zCitySaga),
    fork(zDetailSaga),
    fork(triposoPoiSaga),
    fork(triposoPopularSaga),
    fork(triposoLocationSaga),
    fork(triposoCitiesSaga),
    fork(zCuisineSaga),
  ]);
}
