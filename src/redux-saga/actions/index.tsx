import * as TYPE from "../actionType";
import {
  IGoogleAutoData,
  IGooglePlaceDetail,
  IWData,
  INData,
  ISygicCollection,
  ISygicPlace
} from "../../util/type";

/******* google place api *****/
export const submitAction = (placeId: string): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_G_PLACE_DETAIL,
  placeId
});

export const inputAction = (input: string): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_G_AUTO_COMPLETE,
  input
});

export const clearAutoCompleteAction = (): TYPE.TravelActionType => ({
  type: TYPE.CLEAR_G_AUTO_COMPLETE,
  predictions: []
});

export const getGoogleAutoCompleteSuccess = (
  predictions: IGoogleAutoData[]
): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_G_AUTO_COMPLETE_SUCCEEDED,
  predictions
});

export const getGooglePlaceDetailSuccess = (
  result: IGooglePlaceDetail
): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_G_PLACE_DETAIL_SUCCEEDED,
  result
});

export const getGoogleAutoCompleteFailed = (
  error: string
): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_G_AUTO_COMPLETE_FAILED
});

export const getGooglePlaceDetailFailed = (
  error: string
): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_G_PLACE_DETAIL_FAILED
});

/******* openweathermap place api *****/
export const reqWeatherAction = (geo: string): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_WEATHER,
  geo
});

export const getWeatherSuccess = (weather: IWData): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_WEATHER_SUCCEEDED,
  weather
});

export const getWeatherFailed = (error: string): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_WEATHER_FAILED
});

/******* newsorg  api *****/
export const reqNewsAction = (location: string): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_NEWSORG,
  location
});

export const getNewsSuccess = (articles: INData[]): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_NEWSORG_SUCCEEDED,
  articles
});

export const getNewsFailed = (error: string): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_WEATHER_FAILED
});

/******* sygic travel api *****/
export const reqSygicCollections = (
  placeId: string
): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_SYGIC_COLS,
  placeId
});

export const getSygicCollectionsSuccess = (
  collections: ISygicCollection[]
): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_SYGIC_COLS_SUCCEEDED,
  collections
});

export const getSygicCollectionsFailed = (
  error: string
): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_SYGIC_COLS_FAILED
});

export const reqSygicDetail = (
  ids: string,
  flag: { num: number; id: number }[]
): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_SYGIC_DETAIL,
  ids,
  flag
});

export const getSygicDetailSuccess = (
  places: ISygicPlace[],
  flag: { num: number; id: number }[]
): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_SYGIC_DETAIL_SUCCEEDED,
  places,
  flag
});

export const getSygicDetailFailed = (error: string): TYPE.TravelActionType => ({
  type: TYPE.REQUEST_SYGIC_DETAIL_FAILED
});
