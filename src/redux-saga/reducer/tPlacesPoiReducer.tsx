import { ITriposoPoi } from "../../util/type";
import {
  DELETE_TRIPOSO_POI,
  REQUEST_TRIPOSO_POI_SUCCEEDED,
  ITriposoPoiResSuccess,
  ITriposoPoiDelete,
} from "../actionType";

const initState = [] as ITriposoPoi[];

const triposoPlacesPoiReducer = (
  state = initState,
  actions: ITriposoPoiResSuccess | ITriposoPoiDelete
) => {
  switch (actions.type) {
    case REQUEST_TRIPOSO_POI_SUCCEEDED:
      return actions.poiPlaces;
    case DELETE_TRIPOSO_POI:
      return [];
    default:
      return state;
  }
};

export default triposoPlacesPoiReducer;
