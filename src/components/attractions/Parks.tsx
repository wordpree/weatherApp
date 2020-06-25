import React, { useState } from "react";
import { useMediaQuery } from "@material-ui/core";

import EntryDiv from "./EntryDiv";
import MoreButton from "./MoreCardButton";
import { ITriposoPoi } from "../../util/type";
import ParksSmall from "./ParksSmall";
import ParksMedium from "./ParksMedium";
import { Titles } from "../";

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
        <ParksMedium data={data} more={more} />
      ) : (
        <ParksSmall more={more} data={data} />
      )}
      <MoreButton handleClick={handleClick} more={more} />
    </EntryDiv>
  );
};

export default Parks;
