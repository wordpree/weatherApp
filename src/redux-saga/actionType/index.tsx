import {
  IGoogleAutoData,
  IGooglePlaceDetail,
  IWData,
  INData,
  IZomatoDetailRes,
  ITriposoPoi,
  IGoogleTextsearch,
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
export const REQUEST_DELETE_TRIPOSO_TOURS = "REQUEST_DELETE_TRIPOSO_TOURS";

export const REQUEST_DELETE_ZOMATO_CUISINES = "REQUEST_DELETE_ZOMATO_CUISINES";
export const REQUEST_ZOMATO_CUISINE = "REQUEST_ZOMATO_CUISINE";
export const REQUEST_ZOMATO_CUISINE_SUCCEEDED =
  "REQUEST_ZOMATO_CUISINE_SUCCEEDED";
export const REQUEST_ZOMATO_CUISINE_FAILED = "REQUEST_ZOMATO_CUISINE_FAILED";

export const REQUEST_TRIPOSO_TOURS = "REQUEST_TRIPOSO_TOURS";
export const REQUEST_TRIPOSO_TOURS_SUCCEEDED =
  "REQUEST_TRIPOSO_TOURS_SUCCEEDED";
export const REQUEST_TRIPOSO_TOURS_FAILED = "REQUEST_TRIPOSO_TOURS_FAILED";

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
  cities: ITriposoPoi[];
}
export interface ITriposoCitiesResErr {
  type: typeof REQUEST_TRIPOSO_CITIES_FAILED;
}

export interface ITriposoToursReq {
  type: typeof REQUEST_TRIPOSO_TOURS;
  city: string;
}
export interface ITriposoToursResSuccess {
  type: typeof REQUEST_TRIPOSO_TOURS_SUCCEEDED;
  tours: ITriposoPoi[];
  city: string;
}
export interface ITriposoToursResErr {
  type: typeof REQUEST_TRIPOSO_TOURS_FAILED;
}
export interface ITriposoToursDelete {
  type: typeof REQUEST_DELETE_TRIPOSO_TOURS;
}
/******* zomato cusines details basted on cuisine id and coordinate****/
export interface IZomatoCuisinesReq {
  type: typeof REQUEST_ZOMATO_CUISINE;
  cuisineId: number;
  lat: number;
  lon: number;
}

export interface IZomatoCuisinesResSuccess {
  type: typeof REQUEST_ZOMATO_CUISINE_SUCCEEDED;
  cuisines: IZomatoDetailRes;
}

export interface IZomatoCuisinesResErr {
  type: typeof REQUEST_ZOMATO_CUISINE_FAILED;
}

export interface IZomatoCuisinesDelete {
  type: typeof REQUEST_DELETE_ZOMATO_CUISINES;
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
  | ITriposoToursReq
  | ITriposoToursResSuccess
  | ITriposoToursResErr
  | ITriposoToursDelete
  | IZomatoCuisinesDelete
  | IZomatoCuisinesReq
  | IZomatoCuisinesResSuccess
  | IZomatoCuisinesResErr;
