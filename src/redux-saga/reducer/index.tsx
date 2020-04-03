import { combineReducers } from "redux";
import detailReducer from "./gPlaceDetailReducer";
import completeReducer from "./gAutonCompleteReducer";
import weatherReducer from "./openWeatherReducer";
import newsReducer from "./newsorgReducer";
import sygicColsReducer from "./sCollectionsReducer";
import sygicDetailReducer from "./sPlaceDetailReducer";
import {
  zomatoCityReducer,
  zomatoCollectionReducer
} from "./zRestaurantReducer";

const rootReducer = combineReducers({
  detail: detailReducer,
  predictions: completeReducer,
  weather: weatherReducer,
  news: newsReducer,
  collections: sygicColsReducer,
  places: sygicDetailReducer,
  id: zomatoCityReducer,
  zCollections: zomatoCollectionReducer
});
export type TravelStore = ReturnType<typeof rootReducer>;
export default rootReducer;
