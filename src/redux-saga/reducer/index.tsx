import { combineReducers } from "redux";
import {
  detailReducer,
  completeReducer,
  textsearchReducer,
} from "./googlePlaceReducer";
import weatherReducer from "./openWeatherReducer";
import newsReducer from "./newsorgReducer";
import triposoPlacesPoiReducer from "./tPlacesPoiReducer";
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
  gPois: textsearchReducer,
});
export type TravelStore = ReturnType<typeof rootReducer>;
export default rootReducer;
