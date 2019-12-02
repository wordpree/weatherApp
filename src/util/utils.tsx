export const dataFormat = (date: Date) => {
  return date.toLocaleString("en-AU", {
    hour: "numeric",
    minute: "numeric",
    hour12: true
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
    "NNW"
  ];
  return arr[val % 16];
};
