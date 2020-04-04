import { all, fork } from "redux-saga/effects";
import { googleDetailSaga, googleCompleteSaga } from "./googleSaga";
import openWeatherSaga from "./weatherSaga";
import newsorgSaga from "./newsorgSaga";
import { SygicCollections, sygicPlaces } from "./sygicSaga";
import { zCollectionSaga, zCitySaga, zDetailSaga } from "./zomatoSaga";

export default function* saga() {
  yield all([
    fork(googleDetailSaga),
    fork(googleCompleteSaga),
    fork(openWeatherSaga),
    fork(newsorgSaga),
    fork(SygicCollections),
    fork(sygicPlaces),
    fork(zCollectionSaga),
    fork(zCitySaga),
    fork(zDetailSaga)
  ]);
}
