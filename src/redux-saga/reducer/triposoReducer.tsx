import { ITriposoPoi } from "../../util/type";
import {
  ITriposoPopularPoiResSuccess,
  ITriposoLocationResSuccess,
  ITriposoCitiesResSuccess,
  ITriposoToursResSuccess,
  ITriposoToursDelete,
  REQUEST_TRIPOSO_POPULAR_POI_SUCCEEDED,
  REQUEST_TRIPOSO_LOCATION_SUCCEEDED,
  REQUEST_TRIPOSO_CITIES_SUCCEEDED,
  REQUEST_TRIPOSO_TOURS_SUCCEEDED,
  REQUEST_DELETE_TRIPOSO_TOURS,
} from "../actionType";

interface ITourState {
  city: string;
  tours: ITriposoPoi[];
}

const initState = [] as ITriposoPoi[];
const initStateLocation = {} as {
  islands: ITriposoPoi[];
  parks: ITriposoPoi[];
};
const inintStateTour: ITourState = { city: "", tours: [] };

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

export const triposoCitiesReducer = (
  state = initState,
  actions: ITriposoCitiesResSuccess
) => {
  switch (actions.type) {
    case REQUEST_TRIPOSO_CITIES_SUCCEEDED:
      return actions.cities;
    default:
      return state;
  }
};

export const triposoToursReducer = (
  state = inintStateTour,
  actions: ITriposoToursResSuccess | ITriposoToursDelete
) => {
  switch (actions.type) {
    case REQUEST_TRIPOSO_TOURS_SUCCEEDED:
      const temp: ITourState = { tours: actions.tours, city: actions.city };
      return temp;
    case REQUEST_DELETE_TRIPOSO_TOURS:
      return { tours: [], city: "" };
    default:
      return state;
  }
};
