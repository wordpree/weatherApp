import { City, Cuisine } from "./type";

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
  return url.replace(/http/, "https");
}
