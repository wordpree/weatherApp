import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { FrMotionButton } from "../";
import CityIntroCard from "./CityIntroCard";
import Titles from "../Titles";
import { ITriposoPoi } from "../../util/type";
import useButtonClick, { ISelect } from "./useButtonClick";

interface ICProps {
  data: ITriposoPoi[];
  reqTourOnClick(city: string): void;
  reqTourDelete(): void;
  reqWeatherOnClick(id: string): void;
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
    marginRight: "0.75rem",
    marginBottom: "0.75rem",
    "&:last-child": {
      marginRight: 0,
    },
    "&.active": {
      color: "#fff",
      backgroundColor: "#028a8a",
    },
    "&:hover": {
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
  reqWeatherOnClick,
}: ICProps) => {
  const classes = useStyles();
  const getTourByData = (data: ITriposoPoi[]) =>
    data.filter((item) => item.musement_locations.length !== 0);
  const cityButtonInit = (tour: ITriposoPoi[]) =>
    tour.map((item) => ({
      name: item.name,
      id: item.id,
      select: item.name === "Sydney" ? true : false,
    }));
  const tour = getTourByData(data);
  const cityButton = cityButtonInit(tour);
  const [selectOption, setSelectOption] = useButtonClick("Sydney", cityButton);
  const selectedCity = selectOption.find((s) => s.select) as ISelect;

  useEffect(() => {
    function handleRequest(id: string) {
      reqTourDelete();
      reqTourOnClick(id);
      reqWeatherOnClick(id);
    }
    handleRequest(selectedCity.id);
  }, [selectedCity.id, reqTourDelete, reqTourOnClick, reqWeatherOnClick]);

  const city = tour.find(
    (item) => item.name === selectedCity.name
  ) as ITriposoPoi;
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { name, value } = event.currentTarget;
    setSelectOption({ name, value });
  };
  return (
    <div className={classes.entry}>
      <Titles
        title="City tours are on your hands"
        subTitle="Explore your unmissable destinations in Australia"
        style={{ marginBottom: "2rem" }}
      />
      <div className={classes.btnWrapper}>
        {selectOption.map(({ name, id, select }) => (
          <FrMotionButton
            key={name}
            onClick={handleClick}
            name={name}
            value={id}
            color="primary"
            size="large"
            variant="outlined"
            className={`${classes.btn} ${select ? "active" : null}`}
          >
            {name}
          </FrMotionButton>
        ))}
      </div>
      <CityIntroCard data={city} />
    </div>
  );
};

export default City;
