import { put, call, take } from "redux-saga/effects";
import * as TYPE from "../actionType";
import { fetchSygic } from "../../api";
import * as url from "../../api/config";
import * as actions from "../actions";

function* getSygicCols(placeId: string) {
  try {
    const res = yield call(fetchSygic, url.sygicApi(placeId));
    yield put(actions.getSygicCollectionsSuccess(res.data.collections));
    console.log(res.data.collections);
  } catch (error) {
    put(actions.getSygicCollectionsFailed(error));
  }
}

export default function* sygicCollections() {
  while (true) {
    const { placeId } = yield take(TYPE.REQUEST_SYGIC_COLS);
    yield call(getSygicCols, placeId);
  }
}
