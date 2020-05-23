import {
  IGoogleAutoData,
  IGooglePlaceDetail,
  IWData,
  INData,
  IZomatoCollectionRes,
  IZomatoDetailRes,
  ITriposoPoi,
  IGoogleTextsearch,
} from "../../util/type";
import { reqTriposoCitiesAction } from "../actions";

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

export const REQUEST_TRIPOSO_POPULAR_POI = "REQUEST_TRIPOSO_POPULAR_POI";
export const REQUEST_TRIPOSO_POPULAR_POI_SUCCEEDED =
  "REQUEST_TRIPOSO_POPULAR_POI_SUCCEEDED ";
export const REQUEST_TRIPOSO_POPULAR_POI_FAILED =
  "REQUEST_TRIPOSO_POPULAR_POI_FAILED";

export const REQUEST_TRIPOSO_LOCATION = "REQUEST_TRIPOSO_LOCATION";
export const REQUEST_TRIPOSO_LOCATION_SUCCEEDED =
  "REQUEST_TRIPOSO_LOCATION_SUCCEEDED ";
export const REQUEST_TRIPOSO_LOCATION_FAILED =
  "REQUEST_TRIPOSO_LOCATION_FAILED";

export const REQUEST_TRIPOSO_CITIES_SUCCEEDED =
  "REQUEST_TRIPOSO_CITIES_SUCCEEDED";
export const REQUEST_TRIPOSO_CITIES = "REQUEST_TRIPOSO_CITIES";
export const REQUEST_TRIPOSO_CITIES_FAILED = "REQUEST_TRIPOSO_CITIES_FAILED";

export const REQUEST_ZOMATO_CITY = "REQUEST_ZOMATO_CITY";
export const REQUEST_ZOMATO_CITY_SUCCEEDED = "REQUEST_ZOMATO_CITY_SUCCEEDED ";
export const REQUEST_ZOMATO_CITY_FAILED = "REQUEST_ZOMATO_CITY_FAILED";

export const REQUEST_ZOMATO_COLLECTION = "REQUEST_ZOMATO_COLLECTION";
export const REQUEST_ZOMATO_COLLECTION_SUCCEEDED =
  "REQUEST_ZOMATO_COLLECTION_SUCCEEDED ";
export const REQUEST_ZOMATO_COLLECTION_FAILED =
  "REQUEST_ZOMATO_COLLECTION_FAILED";

export const REQUEST_ZOMATO_DETAIL = "REQUEST_ZOMATO_DETAIL";
export const REQUEST_ZOMATO_DETAIL_SUCCEEDED =
  "REQUEST_ZOMATO_DETAIL_SUCCEEDED";
export const REQUEST_ZOMATO_DETAIL_FAILED = "REQUEST_ZOMATO_DETAIL_FAILED";
export const DELETE_ZOMATO_DETAIL = "DELETE_ZOMATO_DETAIL";

export const REQUEST_TRIPOSO_POI = "REQUEST_TRIPOSO_POI";
export const REQUEST_TRIPOSO_POI_SUCCEEDED = "REQUEST_TRIPOSO_POI_SUCCEEDED ";
export const REQUEST_TRIPOSO_POI_FAILED = "REQUEST_TRIPOSO_POI_FAILED";
export const DELETE_TRIPOSO_POI = "DELETE_TRIPOSO_POI";

export const REQUEST_G_PLACE_POI_SUCCEEDED = "REQUEST_G_PLACE_POI_SUCCEEDED";
export const REQUEST_G_PLACE_POI = "REQUEST_G_PLACE_POI";
export const REQUEST_G_PLACE_POI_FAILED = "REQUEST_G_PLACE_POI_FAILED";

export const REQUEST_G_PLACE_PHOTO_SUCCEEDED =
  "REQUEST_G_PLACE_PHOTO_SUCCEEDED";
export const REQUEST_G_PLACE_PHOTO = "REQUEST_G_PLACE_PHOTO";
export const REQUEST_G_PLACE_PHOTO_FAILED = "REQUEST_G_PLACE_PHOTO_FAILED";

/******* Triposo --> popular |islands|national parks |cities*****/
export interface ITriposoPopularPoiReq {
  type: typeof REQUEST_TRIPOSO_POPULAR_POI;
}
export interface ITriposoPopularPoiResSuccess {
  type: typeof REQUEST_TRIPOSO_POPULAR_POI_SUCCEEDED;
  poiPlaces: ITriposoPoi[];
}
export interface ITriposoPopularPoiResErr {
  type: typeof REQUEST_TRIPOSO_POPULAR_POI_FAILED;
}
export interface ITriposoLocationReq {
  type: typeof REQUEST_TRIPOSO_LOCATION;
}
export interface ITriposoLocationResSuccess {
  type: typeof REQUEST_TRIPOSO_LOCATION_SUCCEEDED;
  islands: ITriposoPoi[];
  parks: ITriposoPoi[];
}
export interface ITriposoLocationResErr {
  type: typeof REQUEST_TRIPOSO_LOCATION_FAILED;
}

export interface ITriposoCitiesReq {
  type: typeof REQUEST_TRIPOSO_CITIES;
}
export interface ITriposoCitiesResSuccess {
  type: typeof REQUEST_TRIPOSO_CITIES_SUCCEEDED;
  cities: Pick<ITriposoPoi, "coordinates" | "name">[];
}
export interface ITriposoCitiesResErr {
  type: typeof REQUEST_TRIPOSO_CITIES_FAILED;
}
/******* triposo pois based on geo coordinate*****/
export interface ITriposoPoiReq {
  type: typeof REQUEST_TRIPOSO_POI;
  geo: string;
  tagLabel: string[];
}

export interface ITriposoPoiResSuccess {
  type: typeof REQUEST_TRIPOSO_POI_SUCCEEDED;
  poiPlaces: ITriposoPoi[];
}

export interface ITriposoPoiResErr {
  type: typeof REQUEST_TRIPOSO_POI_FAILED;
}

export interface ITriposoPoiDelete {
  type: typeof DELETE_TRIPOSO_POI;
}
/******* zomato city*****/
export interface IZomatoCityReq {
  type: typeof REQUEST_ZOMATO_CITY;
  geo: string;
}

export interface IZomatoCityResSuccess {
  type: typeof REQUEST_ZOMATO_CITY_SUCCEEDED;
  id: number;
}

export interface IZomatoCityResErr {
  type: typeof REQUEST_ZOMATO_CITY_FAILED;
}

/******* zomato collection basted on city id*****/
export interface IZomatoCollectionReq {
  type: typeof REQUEST_ZOMATO_COLLECTION;
  geo: string;
}

export interface IZomatoCollectionResSuccess {
  type: typeof REQUEST_ZOMATO_COLLECTION_SUCCEEDED;
  collections: IZomatoCollectionRes;
}

export interface IZomatoCollectionResErr {
  type: typeof REQUEST_ZOMATO_COLLECTION_FAILED;
}

/******* zomato collection details basted on city id and collection id*****/
export interface IZomatoDetailReq {
  type: typeof REQUEST_ZOMATO_DETAIL;
  cityId: number;
  colId: string;
}

export interface IZomatoDetailResSuccess {
  type: typeof REQUEST_ZOMATO_DETAIL_SUCCEEDED;
  detail: IZomatoDetailRes;
}

export interface IZomatoDetailResErr {
  type: typeof REQUEST_ZOMATO_DETAIL_FAILED;
}

export interface IZomatoDeleteDetail {
  type: typeof DELETE_ZOMATO_DETAIL;
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

/******* google place textsearch action *****/
export interface IReqGoogleTextsearch {
  type: typeof REQUEST_G_PLACE_POI;
  country: string;
}
export interface IGetGoogleTextsearchSuccess {
  type: typeof REQUEST_G_PLACE_POI_SUCCEEDED;
  pois: IGoogleTextsearch[];
}
export interface IGetGoogleTextsearchErr {
  type: typeof REQUEST_G_PLACE_POI_FAILED;
}

export type TravelActionType =
  | IReqGoogleTextsearch
  | IGetGoogleTextsearchSuccess
  | IGetGoogleTextsearchErr
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
  | ITriposoPopularPoiReq
  | ITriposoPopularPoiResSuccess
  | ITriposoPopularPoiResErr
  | ITriposoLocationReq
  | ITriposoLocationResSuccess
  | ITriposoLocationResErr
  | IZomatoCityReq
  | IZomatoCityResSuccess
  | IZomatoCityResErr
  | IZomatoCollectionReq
  | IZomatoCollectionResSuccess
  | IZomatoCollectionResErr
  | IZomatoDetailReq
  | IZomatoDetailResSuccess
  | IZomatoDetailResErr
  | IZomatoDeleteDetail
  | ITriposoPoiReq
  | ITriposoPoiResSuccess
  | ITriposoPoiResErr
  | ITriposoPoiDelete;
