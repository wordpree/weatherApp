import {
  IZomatoCuisinesResSuccess,
  REQUEST_ZOMATO_CUISINE_SUCCEEDED,
  IZomatoCuisinesDelete,
  REQUEST_DELETE_ZOMATO_CUISINES,
} from "../actionType";
import { IZomatoDetailRes } from "../../util/type";

const initDetState = [] as IZomatoDetailRes;

export const zomatoCuisineDetailReducer = (
  state = initDetState,
  actions: IZomatoCuisinesResSuccess | IZomatoCuisinesDelete
) => {
  switch (actions.type) {
    case REQUEST_ZOMATO_CUISINE_SUCCEEDED:
      return actions.cuisines;
    case REQUEST_DELETE_ZOMATO_CUISINES:
      return [];
    default:
      return state;
  }
};
