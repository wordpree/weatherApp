import { IGooglePlaceDetail } from "../../util/type";
import * as TYPE from "../actionType";

const initState = {} as IGooglePlaceDetail;

const detailReducer = (state = initState, actions: TYPE.TravelActionType) => {
  switch (actions.type) {
    case TYPE.REQUEST_G_PLACE_DETAIL_SUCCEEDED:
      return actions.result;
    default:
      return state;
  }
};

export default detailReducer;
