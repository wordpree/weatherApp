import * as TYPE from "../actionType";
import { IZomatoCollectionRes } from "../../util/type";

const initCityState = 0;
const initColsState = [] as IZomatoCollectionRes;

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
