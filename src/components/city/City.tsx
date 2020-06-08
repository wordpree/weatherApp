import React from "react";
import { Button, makeStyles } from "@material-ui/core";

import CityIntroCard from "./CityIntroCard";
import Titles from "../Titles";
import { ITriposoPoi } from "../../util/type";
import { useButtonClick } from "./useButtonClick";

interface ICProps {
  data: ITriposoPoi[];
  reqTourOnClick(city: string): void;
  reqTourDelete(): void;
  handleWeather(id: string): void;
}

const useStyles = makeStyles({
  entry: { marginTop: "2rem", marginBottom: "1.25rem" },
  btnWrapper: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "flex-start",
    marginBottom: "1.25rem",
  },
  btn: {
    marginRight: "0.5rem",
    marginBottom: "0.5rem",
    "&:last-child": {
      marginRight: 0,
    },
    "&:hover": {
      color: "#fff",
      backgroundColor: "#028a8a",
    },
    "&.active": {
      color: "#fff",
      backgroundColor: "#028a8a",
    },
  },
  cityWrapper: {
    display: "flex",
  },
  content: {
    padding: "1.75rem",
    "& >h5": {
      letterSpacing: 1,
      color: "#028a8a",
    },
  },
  paper: {
    flex: "1 0 40%",
    marginRight: "auto",
    backgroundSize: "cover !important",
  },
  body1: {
    letterSpacing: 0.5,
    padding: "0.5rem 0",
  },
});

const City = ({
  data,
  reqTourOnClick,
  reqTourDelete,
  handleWeather,
}: ICProps) => {
  const classes = useStyles();
  const dataWithTour = data.filter(
    (item) => item.musement_locations.length !== 0
  );
  const { select, handleClick } = useButtonClick(
    dataWithTour,
    reqTourOnClick,
    reqTourDelete,
    handleWeather
  );
  const city = dataWithTour.find((item) => select[item.name]) as ITriposoPoi;
  return (
    <div className={classes.entry}>
      <Titles
        title="City tours are on your hands"
        subTitle="Explore your unmissable destinations in Australia"
        style={{ marginBottom: "2rem" }}
      />
      <div className={classes.btnWrapper}>
        {dataWithTour.map(({ name, id }) => (
          <Button
            key={name}
            onClick={handleClick}
            name={name}
            value={id}
            color="primary"
            size="large"
            variant="outlined"
            className={`${classes.btn} ${select[name] ? "active" : null}`}
          >
            {name}
          </Button>
        ))}
      </div>
      <CityIntroCard data={city} />
    </div>
  );
};

export default City;
