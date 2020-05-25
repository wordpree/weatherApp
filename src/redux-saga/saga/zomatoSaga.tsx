import { call, put, takeLatest } from "redux-saga/effects";
import * as TYPE from "../actionType";
import { fetchZomato } from "../../api/index";
import * as urls from "../../api/config";
import { resZomatoCuisineFailed, resZomatoCuisineSuccess } from "../actions";
import { IZomatoCuisinesReq } from "../actionType";

function* getCuisineDetail({ cuisineId, lat, lon }: IZomatoCuisinesReq) {
  try {
    const res = yield call(
      fetchZomato,
      urls.zomatoCuisineUrl(cuisineId, lat, lon)
    );
    yield put(resZomatoCuisineSuccess(res.restaurants));
  } catch (error) {
    yield put(resZomatoCuisineFailed(error));
  }
}

export function* zCuisineSaga() {
  yield takeLatest(TYPE.REQUEST_ZOMATO_CUISINE, getCuisineDetail);
}
