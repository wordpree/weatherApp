import { call, put, take, takeLatest } from "redux-saga/effects";
import * as TYPE from "../actionType";
import { fetchZomato } from "../../api/index";
import * as urls from "../../api/config";
import {
  resZomatoCitySuccess,
  resZomatoCollectionFailed,
  resZomatoCollectionSuccess,
  resZomatoCityFailed
} from "../actions";
import { IZomatoCityReq, IZomatoCollectionReq } from "../actionType";

function* getZomatoCity({ geo }: IZomatoCityReq) {
  try {
    const res = yield call(fetchZomato, urls.zomatoCityUrl(geo));
    yield put(resZomatoCitySuccess(res.location_suggestions[0].id));
  } catch (error) {
    yield put(resZomatoCityFailed(error));
  }
}

function* getZomatoCollection({ geo }: IZomatoCollectionReq) {
  try {
    const res = yield call(fetchZomato, urls.zomatoCollectionsUrl(geo));
    yield put(resZomatoCollectionSuccess(res.collections));
  } catch (error) {
    yield put(resZomatoCollectionFailed(error));
  }
}

export function* zCitySaga() {
  yield takeLatest(TYPE.REQUEST_ZOMATO_CITY, getZomatoCity);
}

export function* zCollectionSaga() {
  yield takeLatest(TYPE.REQUEST_ZOMATO_CITY, getZomatoCollection);
}
