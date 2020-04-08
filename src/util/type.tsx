import { ReactNode } from "react";

/*props interface start *******************/
export interface Flag {
  num: number;
  id: number;
}

export interface IHmAddress {
  city: IHmAddressBase;
  country: IHmAddressBase;
}
export interface IHmAddressBase {
  long_name: string;
  short_name: string;
}
export interface IHmGeo {
  geo: {
    lat: number;
    lng: number;
  };
}
export interface ISygicCol {
  address: IHmAddressBase[];
  children: ReactNode;
}

export interface ISygicColDet {
  place_ids: string[];
  children: ReactNode;
}

export type IHmLocation = IHmAddress & IHmGeo;

export interface IApiProps {
  children: ReactNode;
  location: string;
}
export interface IProps {
  children: ReactNode;
}

type func<T> = React.Dispatch<React.SetStateAction<T>>;

export interface IState<T> {
  data: T[];
  setData: func<T[]>;
}
/******props interface end ************************************/

/***  google place  start***/
type Adress = {
  long_name: string;
  short_name: string;
  types: string[];
};
type Location = {
  lat: number;
  lng: number;
};
export interface IGooglePlaceDetailRes {
  result: IGooglePlaceDetail;
}
export interface IGooglePlaceDetail {
  address_components: Array<Adress>;
  geometry: {
    location: Location;
  };
}

export interface IGoogleAutoRes {
  predictions: Array<IGoogleAutoData>;
}
export interface IGoogleAutoData {
  description: string;
  id: string;
  place_id: string;
}
/* google place end*************/
/*** triposo pois api start*******/
export type ITriposoCol = { title: string; description: string; id: string };
type Img = {
  medium: {
    url: string;
  };
  original: {
    url: string;
  };
  thumbnail: {
    url: string;
  };
};

type ImgData = {
  attribution: {
    attribution_link: string;
    attribution_text: string;
  };
  caption: string;
  sizes: Img;
};

type Content = {
  attribution: {
    source_id: string;
    url: string;
  };
  title: string;
  sections: { body: string; image: ImgData; title: string }[];
};

export interface ITriposoPoi {
  id: string;
  name: string;
  score: number;
  intro: string;
  images: ImgData[];
  content: Content;
  snippet: string;
}

/*** triposo pois api end*******/
/* zomato collection api start*/
export type IZomatoCollectionRes = Array<IZomatoCollection>;

export interface IZomatoCollection {
  collection: {
    collection_id: number;
    res_count: number;
    image_url: string;
    title: string;
    description: string;
  };
}

export interface IZomatoDetailData {
  name: string;
  id: number;
  location: { address: string; locality_verbose: string };
  cuisines: string;
  timings: string;
  currency: string;
  average_cost_for_two: number;
  highlights: string[];
  thumb: string;
  featured_image: string;
  phone_numbers: string;
  establishment: string[];
  user_rating: {
    aggregate_rating: "3.8";
    rating_text: "Good";
    votes: "23";
  };
}
export type IZomatoDetail = { restaurant: IZomatoDetailData };
export type IZomatoDetailRes = Array<{ restaurant: IZomatoDetailData }>;

/* zomato collection api end******************/

/** openweather api start**/
type W = {
  id: number;
  main: string;
  description: string;
  icon: string;
};
type obj = {
  [key: string]: number;
};
export interface IWData {
  main: obj;
  sys: obj;
  name: string;
  weather: Array<W>;
  wind: obj;
  visibility: number;
  clouds: { all: number };
  timezone: number;
  coord: obj;
}
/******* openweather api end*********/

/**news api start**/
export interface INData {
  author: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  urlToImage: string;
  content: string;
  id: string;
  source: { name: string; id: null | string };
}

export interface INDataRes {
  loading: boolean;
  articles: Array<INData>;
}

/****** news api end********************/

/**unsplash api start**/
export interface IUnsData {
  id: string;
  created_at: Date;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    name: string;
  };
  links: {
    html: string;
  };
  alt_description: string;
}
export interface IUnsDataRes {
  loading: boolean;
  results: Array<IUnsData>;
}

/** unsplash api end****************/
