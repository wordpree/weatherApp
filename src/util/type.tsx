import { ReactNode } from "react";

export interface IApiProps {
  children: ReactNode;
  location: string;
}
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

/**sygic api start**/

type SygicMetaProps = {
  children: ReactNode;
  id: string;
};

type ReferType = {
  [key: string]: string | number;
};
type MediaAttr = {
  title: string;
  title_url: string;
  author: string;
  author_url: string;
  license: string;
  license_url: string;
};
export interface ISygicCollection {
  name_long: string;
  place_ids: Array<string>;
}

export interface ISygicPlace {
  name: string;
  url: string;
  id: string;
  customer_rating?: number;
  hotel_star_rating?: number;
  categories: Array<string>;
  tag_keys: Array<string>;
  address: string;
  admission: string;
  opening_hours_note: string;
  description: {
    text: string;
    provider: string;
    link: string;
  };
  opening_hours_raw: string;
  references: Array<ReferType>;
  duration_estimate: number;
  marker: string;
  perex: string;
  main_media: {
    media: Array<{ url_template: string; attribution: MediaAttr }>;
  };
}

export interface ISygicPlacesRes {
  data: { places: Array<ISygicPlace> };
}
export interface IsygicCollectionsRes {
  data: { collections: Array<ISygicCollection> };
}
export interface ISygicMeta {
  type: string;
  url_template: string;
  url: string;
  created_at: string;
  attribution: {
    title: string;
    title_url: string;
    author: string;
    author_url: string;
    license_url: string;
    license: string;
  };
}

export interface ISygicMetaRes {
  data: { medias: Array<ISygicMeta> };
}
/**********sygic api end*********************/