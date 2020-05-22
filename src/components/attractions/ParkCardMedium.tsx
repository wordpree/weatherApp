import React from "react";
import ParkCard from "./ParkCard";
import { ITriposoPoi } from "../../util/type";
import { Grid } from "@material-ui/core";
interface IPMProps {
  data: ITriposoPoi;
}

const ParkCardMedium = ({ data }: IPMProps) => {
  return (
    <div>
      <Grid container>
        <Grid item></Grid>
        <Grid item>
          <ParkCard data={data} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ParkCardMedium;
