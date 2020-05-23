import React from "react";
import { Grow } from "@material-ui/core";
import { ITriposoPoi } from "../../util/type";
import ParkCard from "./ParkCard";

interface IPSProps {
  data: ITriposoPoi[];
  more: boolean;
}

const ParksSmall = ({ data, more }: IPSProps) => {
  const lists = (Component: React.SFC<{ data: ITriposoPoi }>) => (
    data: ITriposoPoi[]
  ) => data.map((item) => <Component key={item.id} data={item} />);
  return (
    <div>
      {lists(ParkCard)(data.slice(0, 3))}
      <Grow in={more}>
        <div
          style={{
            display: more ? "block" : "none",
            width: more ? "inherit" : 0,
          }}
        >
          {more && lists(ParkCard)(data.slice(3))}
        </div>
      </Grow>
    </div>
  );
};

export default ParksSmall;
