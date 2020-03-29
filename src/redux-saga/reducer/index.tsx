import { combineReducers } from "redux";
import detailReducer from "./gPlaceDetailReducer";
import completeReducer from "./gAutonCompleteReducer";
import weatherReducer from "./openWeatherReducer";
import newsReducer from "./newsorgReducer";
import sygicColsRudecer from "./sCollectionsReducer";

const rootReducer = combineReducers({
  location: detailReducer,
  predictions: completeReducer,
  weather: weatherReducer,
  news: newsReducer,
  collections: sygicColsRudecer
});
export type TravelStore = ReturnType<typeof rootReducer>;
export default rootReducer;
