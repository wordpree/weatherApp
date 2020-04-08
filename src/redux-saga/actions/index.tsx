import * as TYPE from "../actionType";
import {
  IGoogleAutoData,
  IGooglePlaceDetail,
  IWData,
  INData,
  IZomatoCollectionRes,
  IZomatoDetailRes,
  ITriposoPoi,
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
export const reqZomatoCityAction = (geo: string): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_ZOMATO_CITY,
  geo,
});

export const resZomatoCitySuccess = (id: number): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_ZOMATO_CITY_SUCCEEDED,
  id,
});

export const resZomatoCityFailed = (error: string): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_ZOMATO_CITY_FAILED,
});

export const reqZomatoCollectionAction = (
  geo: string
): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_ZOMATO_COLLECTION,
  geo,
});

export const resZomatoCollectionSuccess = (
  collections: IZomatoCollectionRes
): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_ZOMATO_COLLECTION_SUCCEEDED,
  collections,
});

export const resZomatoCollectionFailed = (
  error: string
): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_ZOMATO_COLLECTION_FAILED,
});

export const reqZomatoDetailAction = (
  cityId: number,
  colId: string
): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_ZOMATO_DETAIL,
  cityId,
  colId,
});

export const resZomatoDetailSuccess = (
  detail: IZomatoDetailRes
): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_ZOMATO_DETAIL_SUCCEEDED,
  detail,
});

export const resZomatoDetailFailed = (
  error: string
): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_ZOMATO_DETAIL_FAILED,
});

export const deleteZomatoDetailAction = (): TYPE.TravelActionType => ({
  type: TYPE.DELETE_ZOMATO_DETAIL,
});

export const reqTriposoPoiAction = (
  geo: string,
  tagLabel: string[]
): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_TRIPOSO_POI,
  geo,
  tagLabel,
});

export const reqTriposoPoiSuccess = (
  poiPlaces: ITriposoPoi[]
): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_TRIPOSO_POI_SUCCEEDED,
  poiPlaces,
});

export const reqTriposoPoiFailed = (error: string): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_TRIPOSO_POI_FAILED,
});

export const deleteTriposoPois = (): TYPE.TravelActionType => ({
  type: TYPE.DELETE_TRIPOSO_POI,
});
