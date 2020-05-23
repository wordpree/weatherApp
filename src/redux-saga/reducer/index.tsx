import { combineReducers } from "redux";
import {
  detailReducer,
  completeReducer,
  textsearchReducer,
} from "./googlePlaceReducer";
import weatherReducer from "./openWeatherReducer";
import newsReducer from "./newsorgReducer";
import {
  triposoPlacesPoiReducer,
  triposoLocationReducer,
  triposoPopularReducer,
  triposoCitiesReducer,
} from "./tPlacesReducer";
import {
  zomatoCityReducer,
  zomatoCollectionReducer,
  zomatoDetailReducer,
} from "./zRestaurantReducer";

const rootReducer = combineReducers({
  detail: detailReducer,
  predictions: completeReducer,
  weather: weatherReducer,
  news: newsReducer,
  zId: zomatoCityReducer,
  zCollections: zomatoCollectionReducer,
  zColDetail: zomatoDetailReducer,
  tPoisDetail: triposoPlacesPoiReducer,
  tLocation: triposoLocationReducer,
  tPopular: triposoPopularReducer,
  gPois: textsearchReducer,
  zCities: triposoCitiesReducer,
});
export type TravelStore = ReturnType<typeof rootReducer>;
export default rootReducer;
