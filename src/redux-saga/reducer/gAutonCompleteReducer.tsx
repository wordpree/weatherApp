import { IGoogleAutoData } from "../../util/type";
import * as TYPE from "../actionType";

const initState = [] as IGoogleAutoData[];

const completeReducer = (state = initState, actions: TYPE.TravelActionType) => {
  switch (actions.type) {
    case TYPE.REQUEST_G_AUTO_COMPLETE_SUCCEEDED:
      return actions.predictions;
    case TYPE.CLEAR_G_AUTO_COMPLETE:
      return [];
    default:
      return state;
  }
};

export default completeReducer;
