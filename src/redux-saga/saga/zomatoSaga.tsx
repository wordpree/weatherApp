import { call, put, takeLatest } from "redux-saga/effects";
import * as TYPE from "../actionType";
import { fetchZomato } from "../../api/index";
import * as urls from "../../api/config";
import {
  resZomatoCitySuccess,
  resZomatoCollectionFailed,
  resZomatoCollectionSuccess,
  resZomatoCityFailed,
  resZomatoDetailSuccess,
  resZomatoDetailFailed
} from "../actions";
import {
  IZomatoCityReq,
  IZomatoCollectionReq,
  IZomatoDetailReq
} from "../actionType";

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

function* getZomatoDetail({ cityId, colId }: IZomatoDetailReq) {
  try {
    const res = yield call(fetchZomato, urls.zomatoDetailsUrl(cityId, colId));
    yield put(resZomatoDetailSuccess(res.restaurants));
  } catch (error) {
    yield put(resZomatoDetailFailed(error));
  }
}

export function* zCitySaga() {
  yield takeLatest(TYPE.REQUEST_ZOMATO_CITY, getZomatoCity);
}

export function* zCollectionSaga() {
  yield takeLatest(TYPE.REQUEST_ZOMATO_CITY, getZomatoCollection);
}

export function* zDetailSaga() {
  yield takeLatest(TYPE.REQUEST_ZOMATO_DETAIL, getZomatoDetail);
}
