import { ITriposoPoi } from "../../util/type";
import {
  DELETE_TRIPOSO_POI,
  REQUEST_TRIPOSO_POI_SUCCEEDED,
  ITriposoPoiResSuccess,
  ITriposoPoiDelete,
  ITriposoPopularPoiResSuccess,
  ITriposoLocationResSuccess,
  REQUEST_TRIPOSO_POPULAR_POI_SUCCEEDED,
  REQUEST_TRIPOSO_LOCATION_SUCCEEDED,
} from "../actionType";

const initState = [] as ITriposoPoi[];
const initStateLocation = {} as {
  islands: ITriposoPoi[];
  parks: ITriposoPoi[];
};

export const triposoPlacesPoiReducer = (
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

export const triposoPopularReducer = (
  state = initState,
  actions: ITriposoPopularPoiResSuccess
) => {
  switch (actions.type) {
    case REQUEST_TRIPOSO_POPULAR_POI_SUCCEEDED:
      return actions.poiPlaces;
    default:
      return state;
  }
};
export const triposoLocationReducer = (
  state = initStateLocation,
  actions: ITriposoLocationResSuccess
) => {
  switch (actions.type) {
    case REQUEST_TRIPOSO_LOCATION_SUCCEEDED:
      return {
        islands: actions.islands,
        parks: actions.parks,
      };
    default:
      return state;
  }
};
