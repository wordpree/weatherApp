import {
  IGoogleAutoData,
  IGooglePlaceDetail,
  IWData,
  INData,
  ISygicCollection,
  ISygicPlace
} from "../../util/type";

export const REQUEST_G_PLACE_DETAIL = "REQUEST_G_PLACE_DETAIL";
export const REQUEST_G_PLACE_DETAIL_SUCCEEDED =
  "REQUEST_G_PLACE_DETAIL_SUCCEEDED";
export const REQUEST_G_PLACE_DETAIL_FAILED = "REQUEST_G_PLACE_DETAIL_FAILED";
export const CLEAR_G_AUTO_COMPLETE = "CLEAR_G_AUTO_COMPLETE";

export const REQUEST_G_AUTO_COMPLETE = "REQUEST_G_AUTO_COMPLETE";
export const REQUEST_G_AUTO_COMPLETE_SUCCEEDED =
  "REQUEST_G_AUTO_COMPLETE_SUCCEEDED";
export const REQUEST_G_AUTO_COMPLETE_FAILED = "REQUEST_G_AUTO_COMPLETE_FAILED";

export const REQUEST_WEATHER = "REQUEST_WEATHER";
export const REQUEST_WEATHER_SUCCEEDED = "REQUEST_WEATHER_SUCCEEDED";
export const REQUEST_WEATHER_FAILED = "REQUEST_WEATHER_FAILED";

export const REQUEST_NEWSORG = "REQUEST_NEWSORG";
export const REQUEST_NEWSORG_SUCCEEDED = "REQUEST_NEWSORG_SUCCEEDED";
export const REQUEST_NEWSORG_FAILED = "REQUEST_NEWSORG_FAILED";

export const REQUEST_SYGIC_COLS = "REQUEST_SYGIC_COLS";
export const REQUEST_SYGIC_COLS_SUCCEEDED = "REQUEST_SYGIC_COLS_SUCCEEDED ";
export const REQUEST_SYGIC_COLS_FAILED = "REQUEST_SYGIC_COLS_FAILED";

export const REQUEST_SYGIC_DETAIL = "REQUEST_SYGIC_DETAIL";
export const REQUEST_SYGIC_DETAIL_SUCCEEDED = "REQUEST_SYGIC_DETAIL_SUCCEEDED ";
export const REQUEST_SYGIC_DETAIL_FAILED = "REQUEST_SYGIC_DETAIL_FAILED";

/******* sygic collections action *****/
export interface ISygicColsReq {
  type: typeof REQUEST_SYGIC_COLS;
  placeId: string;
}

export interface ISygicColsResSuccess {
  type: typeof REQUEST_SYGIC_COLS_SUCCEEDED;
  collections: ISygicCollection[];
}

export interface ISygicColsResErr {
  type: typeof REQUEST_SYGIC_COLS_FAILED;
}

/******* sygic collections detail action *****/
export interface ISygicDetailReq {
  type: typeof REQUEST_SYGIC_DETAIL;
  ids: string; //place_ids
  flag: { num: number; id: number }[];
}

export interface ISygicDetailResSuccess {
  type: typeof REQUEST_SYGIC_DETAIL_SUCCEEDED;
  places: ISygicPlace[];
  flag: { num: number; id: number }[];
}

export interface ISygicDetailResErr {
  type: typeof REQUEST_SYGIC_DETAIL_FAILED;
}

/******* newsorg news action *****/
export interface INewsReq {
  type: typeof REQUEST_NEWSORG;
  location: string;
}

export interface INewsResSuccess {
  type: typeof REQUEST_NEWSORG_SUCCEEDED;
  articles: INData[];
}

export interface INewsResERR {
  type: typeof REQUEST_NEWSORG_FAILED;
}

/******* openweathermap  action *****/
export interface IWeatherReq {
  type: typeof REQUEST_WEATHER;
  geo: string;
}

export interface IWeatherResSuccess {
  type: typeof REQUEST_WEATHER_SUCCEEDED;
  weather: IWData;
}

export interface IWeatherResErr {
  type: typeof REQUEST_WEATHER_FAILED;
}

/******* google  place autocomplete action *****/
export interface IGClearAutoComplete {
  type: typeof CLEAR_G_AUTO_COMPLETE;
  predictions: [];
}

export interface ISearchDataSubmit {
  type: typeof REQUEST_G_PLACE_DETAIL;
  placeId: string;
}

export interface ISearchDataInput {
  type: typeof REQUEST_G_AUTO_COMPLETE;
  input: string;
}

export interface IGetGoogleAutoComplete {
  type: typeof REQUEST_G_AUTO_COMPLETE_SUCCEEDED;
  predictions: IGoogleAutoData[];
}

/******* google  place detail action *****/
export interface IGetGooglePlaceDetail {
  type: typeof REQUEST_G_PLACE_DETAIL_SUCCEEDED;
  result: IGooglePlaceDetail;
}
export interface IGetGooglePlaceDetailERR {
  type: typeof REQUEST_G_PLACE_DETAIL_FAILED;
}
export interface IGetGoogleAutoCompleteERR {
  type: typeof REQUEST_G_AUTO_COMPLETE_FAILED;
}

export type TravelActionType =
  | ISearchDataSubmit
  | IGClearAutoComplete
  | ISearchDataInput
  | IGetGoogleAutoComplete
  | IGetGooglePlaceDetail
  | IGetGooglePlaceDetailERR
  | IGetGoogleAutoCompleteERR
  | IWeatherReq
  | IWeatherResSuccess
  | IWeatherResErr
  | INewsReq
  | INewsResSuccess
  | INewsResERR
  | ISygicColsReq
  | ISygicColsResSuccess
  | ISygicColsResErr
  | ISygicDetailReq
  | ISygicDetailResSuccess
  | ISygicDetailResErr;
