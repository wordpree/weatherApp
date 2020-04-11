import {
  IGooglePlaceDetail,
  IGoogleAutoData,
  IGoogleTextsearch,
} from "../../util/type";
import {
  REQUEST_G_AUTO_COMPLETE_SUCCEEDED,
  REQUEST_G_PLACE_DETAIL_SUCCEEDED,
  CLEAR_G_AUTO_COMPLETE,
  REQUEST_G_PLACE_POI_SUCCEEDED,
  TravelActionType,
} from "../actionType";

const initStateDet = {} as IGooglePlaceDetail;
const initStateAuto = [] as IGoogleAutoData[];
const initStateTextsearch = [] as IGoogleTextsearch[];

export const detailReducer = (
  state = initStateDet,
  actions: TravelActionType
) => {
  switch (actions.type) {
    case REQUEST_G_PLACE_DETAIL_SUCCEEDED:
      return actions.result;
    default:
      return state;
  }
};

export const textsearchReducer = (
  state = initStateTextsearch,
  actions: TravelActionType
) => {
  switch (actions.type) {
    case REQUEST_G_PLACE_POI_SUCCEEDED:
      return actions.pois;
    default:
      return state;
  }
};

export const completeReducer = (
  state = initStateAuto,
  actions: TravelActionType
) => {
  switch (actions.type) {
    case REQUEST_G_AUTO_COMPLETE_SUCCEEDED:
      return actions.predictions;
    case CLEAR_G_AUTO_COMPLETE:
      return [];
    default:
      return state;
  }
};
