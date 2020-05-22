import React, { useState } from "react";
import { ITriposoPoi } from "../../util/type";
import { makeStyles, useMediaQuery } from "@material-ui/core";
import EntryDiv from "./EntryDiv";
import { Titles } from "../";
import ParksSmall from "./ParksSmall";
import ParksMedium from "./ParksMedium";

interface IPProps {
  data: ITriposoPoi[];
}
export const parkCardLists = (Component: React.SFC<{ data: ITriposoPoi }>) => (
  data: ITriposoPoi[]
) => data.map((item) => <Component key={item.id} data={item} />);

const Parks = ({ data }: IPProps) => {
  const lg = useMediaQuery("(min-width:1280px)");
  const [more, setMore] = useState(false);
  const handleClick = () => setMore((prev) => !prev);

  return (
    <EntryDiv>
      <Titles
        title="National Parks"
        subTitle=" Where nature tells its historical story"
        style={{ marginBottom: "1.5rem" }}
      />
      {lg ? (
        <ParksMedium data={data} />
      ) : (
        <ParksSmall more={more} data={data} handleClick={handleClick} />
      )}
    </EntryDiv>
  );
};

export default Parks;
