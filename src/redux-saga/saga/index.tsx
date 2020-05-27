import { all, fork } from "redux-saga/effects";
import {
  googleDetailSaga,
  googleCompleteSaga,
  textsearchSaga,
} from "./googleSaga";
import openWeatherSaga from "./weatherSaga";
import newsorgSaga from "./newsorgSaga";
import {
  triposoPopularSaga,
  triposoLocationSaga,
  triposoTopCitiesSaga,
  triposoToursSaga,
} from "./triposoSaga";
import { zCuisineSaga } from "./zomatoSaga";

export default function* saga() {
  yield all([
    fork(googleDetailSaga),
    fork(googleCompleteSaga),
    fork(textsearchSaga),
    fork(openWeatherSaga),
    fork(newsorgSaga),
    fork(triposoPopularSaga),
    fork(triposoLocationSaga),
    fork(triposoTopCitiesSaga),
    fork(zCuisineSaga),
    fork(triposoToursSaga),
  ]);
}
