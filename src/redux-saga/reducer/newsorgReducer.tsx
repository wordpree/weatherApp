import * as TYPE from "../actionType";
import { INData } from "../../util/type";

const initState = [] as INData[];

const newsReducer = (state = initState, actions: TYPE.TravelActionType) => {
  switch (actions.type) {
    case TYPE.REQUEST_NEWSORG_SUCCEEDED:
      return [...actions.articles];

    default:
      return [...state];
  }
};

export default newsReducer;
