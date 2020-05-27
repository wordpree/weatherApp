import * as TYPE from "../actionType";
import {
  IGoogleAutoData,
  IGooglePlaceDetail,
  IWData,
  INData,
  IZomatoDetailRes,
  ITriposoPoi,
  IGoogleTextsearch,
} from "../../util/type";

/******* google place api *****/
export const submitAction = (placeId: string): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_G_PLACE_DETAIL,
  placeId,
});

export const inputAction = (input: string): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_G_AUTO_COMPLETE,
  input,
});

export const clearAutoCompleteAction = (): TYPE.TravelActionType => ({
  type: TYPE.CLEAR_G_AUTO_COMPLETE,
  predictions: [],
});

export const getGoogleAutoCompleteSuccess = (
  predictions: IGoogleAutoData[]
): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_G_AUTO_COMPLETE_SUCCEEDED,
  predictions,
});

export const getGooglePlaceDetailSuccess = (
  result: IGooglePlaceDetail
): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_G_PLACE_DETAIL_SUCCEEDED,
  result,
});

export const getGoogleAutoCompleteFailed = (
  error: string
): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_G_AUTO_COMPLETE_FAILED,
});

export const getGooglePlaceDetailFailed = (
  error: string
): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_G_PLACE_DETAIL_FAILED,
});

export const reqGoogleSearchText = (
  country: string
): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_G_PLACE_POI,
  country,
});
export const reqGoogleSearchTextSuccess = (
  pois: IGoogleTextsearch[]
): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_G_PLACE_POI_SUCCEEDED,
  pois,
});
export const reqGoogleSearchTextFailed = (
  error: string
): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_G_PLACE_POI_FAILED,
});

/******* openweathermap place api *****/
export const reqWeatherAction = (geo: string): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_WEATHER,
  geo,
});

export const getWeatherSuccess = (weather: IWData): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_WEATHER_SUCCEEDED,
  weather,
});

export const getWeatherFailed = (error: string): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_WEATHER_FAILED,
});

/******* newsorg  api *****/
export const reqNewsAction = (location: string): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_NEWSORG,
  location,
});

export const getNewsSuccess = (articles: INData[]): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_NEWSORG_SUCCEEDED,
  articles,
});

export const getNewsFailed = (error: string): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_WEATHER_FAILED,
});

/***********************Zomato restaurant*****************/

export const reqZomatoCusinesDelete = (): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_DELETE_ZOMATO_CUISINES,
});

export const reqZomatoCuisineAction = (
  cuisineId: number,
  lat: number,
  lon: number
): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_ZOMATO_CUISINE,
  cuisineId,
  lat,
  lon,
});

export const resZomatoCuisineSuccess = (
  cuisines: IZomatoDetailRes
): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_ZOMATO_CUISINE_SUCCEEDED,
  cuisines,
});

export const resZomatoCuisineFailed = (
  error: string
): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_ZOMATO_CUISINE_FAILED,
});

/*********Triposo Api*********/

export const reqTriposoPopularPoiAction = () => ({
  type: TYPE.REQUEST_TRIPOSO_POPULAR_POI,
});

export const reqTriposoPopularPoiSuccess = (poiPlaces: ITriposoPoi[]) => ({
  type: TYPE.REQUEST_TRIPOSO_POPULAR_POI_SUCCEEDED,
  poiPlaces,
});
export const reqTriposoPopularPoiFailed = (error: string) => ({
  type: TYPE.REQUEST_TRIPOSO_POPULAR_POI_FAILED,
});

export const reqTriposoLocationAction = () => ({
  type: TYPE.REQUEST_TRIPOSO_LOCATION,
});

export const reqTriposoLocationSuccess = (
  islands: ITriposoPoi[],
  parks: ITriposoPoi[]
) => ({
  type: TYPE.REQUEST_TRIPOSO_LOCATION_SUCCEEDED,
  islands,
  parks,
});
export const reqTriposoLocationFailed = (error: string) => ({
  type: TYPE.REQUEST_TRIPOSO_LOCATION_FAILED,
});

export const reqTriposoCitiesAction = () => ({
  type: TYPE.REQUEST_TRIPOSO_CITIES,
});

export const reqTriposoCitiesSuccess = (
  cities: Pick<ITriposoPoi, "coordinates" | "name">[]
) => ({
  type: TYPE.REQUEST_TRIPOSO_CITIES_SUCCEEDED,
  cities,
});
export const reqTriposoCitiesFailed = (error: string) => ({
  type: TYPE.REQUEST_TRIPOSO_CITIES_FAILED,
});

export const reqTriposoTourAction = (city: string): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_TRIPOSO_TOURS,
  city,
});
export const reqTriposoTourSuccess = (
  tours: ITriposoPoi[],
  city: string
): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_TRIPOSO_TOURS_SUCCEEDED,
  tours,
  city,
});
export const reqTriposoTourFailed = (error: string) => ({
  type: TYPE.REQUEST_TRIPOSO_TOURS_FAILED,
});

export const reqTriposoTourDelete = () => ({
  type: TYPE.REQUEST_DELETE_TRIPOSO_TOURS,
});
