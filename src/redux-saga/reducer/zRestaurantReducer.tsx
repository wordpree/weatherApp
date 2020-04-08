import * as TYPE from "../actionType";
import { IZomatoCollectionRes, IZomatoDetailRes } from "../../util/type";

const initCityState = null;
const initColsState = [] as IZomatoCollectionRes;
const initDetState = [] as IZomatoDetailRes;

export const zomatoCityReducer = (
  state = initCityState,
  actions: TYPE.IZomatoCityResSuccess
) => {
  switch (actions.type) {
    case TYPE.REQUEST_ZOMATO_CITY_SUCCEEDED:
      return actions.id;
    default:
      return state;
  }
};

export const zomatoCollectionReducer = (
  state = initColsState,
  actions: TYPE.IZomatoCollectionResSuccess
) => {
  switch (actions.type) {
    case TYPE.REQUEST_ZOMATO_COLLECTION_SUCCEEDED:
      return actions.collections;
    default:
      return state;
  }
};

export const zomatoDetailReducer = (
  state = initDetState,
  actions: TYPE.IZomatoDetailResSuccess | TYPE.IZomatoDeleteDetail
) => {
  switch (actions.type) {
    case TYPE.REQUEST_ZOMATO_DETAIL_SUCCEEDED:
      return actions.detail;
    case TYPE.DELETE_ZOMATO_DETAIL:
      return [];
    default:
      return state;
  }
};
