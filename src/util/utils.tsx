import React from "react";
import { City, Cuisine, ITriposoPoi, Option } from "./type";
import { Link, LinkProps } from "react-router-dom";
import imgFromUnsplash from "../assets/en-unsplash.jpg";

export const dataFormat = (date: Date) => {
  return date.toLocaleString("en-AU", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

export const localTime = (date: Date, timezone: number) => {
  const offset = date.getTimezoneOffset() * 60000 + timezone * 1000;
  return new Date(Date.parse(date.toString()) + offset);
};

export const degreeToDir = (degree: number) => {
  const val = Math.floor(degree / 22.5 + 0.5);
  const arr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return arr[val % 16];
};

export async function fetchData(
  url: string,
  header: Record<string, string> | boolean
) {
  let res;
  if (typeof header === "boolean") {
    // console.log(url);

    res = await fetch(url);
    // console.log(`${res.status}: ${res.statusText}--${url}`);
  } else {
    res = await fetch(url, { headers: header });
  }
  if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
  return await res.json();
}

export function findNameWithType(types: string[], query: string) {
  return types.join(",").includes(query);
}

/******type guard*********/

export function isCity(input: City | Cuisine): input is City {
  return (input as City).coordinates !== undefined;
}

export function secureProtocol(url: string) {
  return url.includes("https") ? url : url.replace(/http/, "https");
}

export function forwardRefToLink(path: string) {
  return React.forwardRef<any, Omit<LinkProps, "to">>((props, ref) => (
    <Link {...props} ref={ref} to={path} />
  ));
}

export function DataWithImg(data: ITriposoPoi[], removedName?: string) {
  return data && data.length
    ? data.filter((item) => item.images.length > 1 && item.name !== removedName)
    : [];
}

export function getImgWithSize(data: ITriposoPoi) {
  const { images } = data;
  const lookup = images.find((img) => {
    const { width, height } = img.sizes.medium;
    return width > 600 && height > 400;
  });
  return lookup ? lookup : images[0];
}

export function getItemById(data: ITriposoPoi[], id: string) {
  return data && data.length
    ? (data.find((item) => item.id === id) as ITriposoPoi)
    : ({} as ITriposoPoi);
}

export function getIdsByOpt(options: Option, value: string) {
  let result;
  const ret = options.find((item) => {
    if (isCity(item)) {
      return item.name === value;
    } else {
      return item.cuisine_name === value;
    }
  });
  if (ret) {
    if (isCity(ret)) {
      result = ret.coordinates;
    } else {
      result = ret.cuisine_id;
    }
  }
  return result;
}

export function htmlSanitizer(content: string) {
  return content.replace(/<.*?>/gi, "");
}

export function titleLmt(
  text: string | undefined | null,
  magicNum: number,
  media: boolean
) {
  if (!text) {
    return 'Header line\'s going missing';
  }
  if (media) {
    return text;
  }
  if (text.length > magicNum) {
    return text.substring(0, magicNum) + "...";
  }
  return text;
}

export function imgUrl(url: string | undefined | null) {
  if (!url) {
    return imgFromUnsplash;
  }
  return secureProtocol(url);
}

export function authorConfirm(author: string | undefined | null) {
  if (!author) {
    return "Author Unkown";
  }
  return author;
}

export function contentLmt(
  content: string | null | undefined,
  query: boolean,
  magicNumSmall: number,
  magicNumLarge: number
) {
  if (content) {
    return query
      ? content.substring(0, magicNumSmall) + "..."
      : content.substring(0, magicNumLarge) + "...";
  }
  return "no content displayed";
}
