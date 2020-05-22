import React from "react";
import { makeStyles, Button, Grow } from "@material-ui/core";
import { ITriposoPoi } from "../../util/type";
import ParkCard from "./ParkCard";

interface IPSProps {
  data: ITriposoPoi[];
  handleClick(): void;
  more: boolean;
}
const useStyles = makeStyles((theme) => ({
  btnWrapper: {
    margin: "2rem auto 0",
    textAlign: "center",
  },
  btn: {
    background: "#028a8a",
    color: "#fff",
    "&:hover": {
      background: "#058181",
    },
  },
}));

const ParksSmall = ({ data, more, handleClick }: IPSProps) => {
  const classes = useStyles();
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
          }}
        >
          {more && lists(ParkCard)(data.slice(3))}
        </div>
      </Grow>
      <div className={classes.btnWrapper}>
        <Button
          onClick={handleClick}
          size="large"
          variant="contained"
          className={classes.btn}
        >
          {more ? "View Less" : "View More"}
        </Button>
      </div>
    </div>
  );
};

export default ParksSmall;
