import { put, call, take } from "redux-saga/effects";
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

function* getSygicPlaces(placeIds: string, id: number[]) {
  try {
    const res = yield call(fetchSygic, url.sygicDetailApi(placeIds));
    yield put(actions.getSygicDetailSuccess(res.data.places, id));
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
    const { placeIds, id } = yield take(TYPE.REQUEST_SYGIC_DETAIL);
    yield call(getSygicPlaces, placeIds, id);
  }
}
