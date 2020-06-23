import { useState, useEffect } from "react";

export type ClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;
type Ele = { name: string; value: string };
export interface ISelect {
  select: boolean;
  name: string;
  id: string;
}

const useButtonClick = (
  defaultCity: string,
  tourButtonsInit: ISelect[],
  reqTourOnClick: (city: string) => void,
  reqTourDelete: () => void,
  handleWeather: (id: string) => void
): [ISelect[], (arg: Ele) => void] => {
  const [clickedButton, setClickedButton] = useState({
    name: defaultCity,
    value: defaultCity,
  });
  const selectOption = [...tourButtonsInit].map((b) => ({
    name: b.name,
    select: b.name === clickedButton.name ? true : false,
    id: b.id,
  }));
  useEffect(() => {
    const { value } = clickedButton;
    reqTourDelete();
    reqTourOnClick(value);
    handleWeather(value);
  }, [clickedButton]);
  return [selectOption, setClickedButton];
};

export default useButtonClick;
