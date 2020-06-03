import { useState } from "react";
import { ITriposoPoi } from "../../util/type";

interface ISelect {
  [key: string]: boolean;
}

export const useButtonClick = (
  data: ITriposoPoi[],
  reqTourOnClick: (city: string) => void,
  reqTourDelete: () => void,
  handleWeather: (id: string) => void
) => {
  let options = {};
  data.forEach((item) => {
    options = { ...options, [item.name]: false };
  });
  const [select, setSelect] = useState<ISelect>({ ...options, Sydney: true });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!select[e.currentTarget.name]) {
      setSelect({ ...options, Sydney: false, [e.currentTarget.name]: true });
      reqTourDelete();
      reqTourOnClick(e.currentTarget.value);
      handleWeather(e.currentTarget.value);
    }
  };
  return { select, handleClick };
};
