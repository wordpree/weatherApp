import { put, call, take, fork } from "redux-saga/effects";
import * as TYPE from "../actionType";
import { fetchSygic } from "../../api";
import * as url from "../../api/config";
import * as actions from "../actions";

function* getSygicCols(placeId: string) {
  try {
    const res = yield call(fetchSygic, url.sygicApi(placeId));
    yield put(actions.getSygicCollectionsSuccess(res.data.collections));
  } catch (error) {
    yield put(actions.getSygicCollectionsFailed(error));
  }
}

function* getSygicPlaces(ids: string, flag: { num: number; id: number }[]) {
  //ids:place_ids,flag:divider for different collections
  try {
    const res = yield call(fetchSygic, url.sygicDetailApi(ids));
    yield put(actions.getSygicDetailSuccess(res.data.places, flag));
  } catch (error) {
    yield put(actions.getSygicDetailFailed(error));
  }
}

export function* SygicCollections() {
  while (true) {
    const { placeId } = yield take(TYPE.REQUEST_SYGIC_COLS);
    yield call(getSygicCols, placeId);
  }
}

export function* sygicPlaces() {
  while (true) {
    yield take(TYPE.REQUEST_SYGIC_COLS_SUCCEEDED);
    const { ids, flag } = yield take(TYPE.REQUEST_SYGIC_DETAIL);
    yield call(getSygicPlaces, ids, flag);
  }
}
