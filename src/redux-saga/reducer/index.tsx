import { combineReducers } from "redux";
import {
  detailReducer,
  completeReducer,
  textsearchReducer,
} from "./googlePlaceReducer";
import weatherReducer from "./openWeatherReducer";
import newsReducer from "./newsorgReducer";
import {
  triposoLocationReducer,
  triposoPopularReducer,
  triposoCitiesReducer,
} from "./triposoReducer";
import { zomatoCuisineDetailReducer } from "./zomatoReducer";

const rootReducer = combineReducers({
  detail: detailReducer,
  predictions: completeReducer,
  weather: weatherReducer,
  news: newsReducer,
  tLocation: triposoLocationReducer,
  tPopular: triposoPopularReducer,
  gPois: textsearchReducer,
  tCities: triposoCitiesReducer,
  zCuisines: zomatoCuisineDetailReducer,
});
export type TravelStore = ReturnType<typeof rootReducer>;
export default rootReducer;
