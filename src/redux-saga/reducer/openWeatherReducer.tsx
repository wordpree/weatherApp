import { IWData } from "../../util/type";
import * as TYPE from "../actionType";

const initState = {} as IWData;

const weatherReducer = (state = initState, actions: TYPE.TravelActionType) => {
  switch (actions.type) {
    case TYPE.REQUEST_WEATHER_SUCCEEDED:
      return {
        ...state,
        ...actions.weather
      };

    default:
      return state;
  }
};
export default weatherReducer;
