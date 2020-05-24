import React, { useState, useEffect } from "react";
import { Titles } from "../";
import Options from "./Options";
import { Container, makeStyles, Button } from "@material-ui/core";
import cuisines from "../../util/cusines";
import { City, Cuisine } from "../../util/type";
import useOption from "./useOption";
import getIdsByOpt from "./getIdsByOpt";

interface IFCProps {
  cities: City[];
  reqZomatoCusinesAction(cuisineId: number, lat: number, lon: number): void;
}

export type CityGeo = {
  latitude: number;
  longitude: number;
};
export type Action =
  | React.Dispatch<React.SetStateAction<number>>
  | React.Dispatch<React.SetStateAction<CityGeo>>;

const useStyles = makeStyles((theme) => ({
  optionWrapper: {
    padding: "1rem 0.25rem",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up(768)]: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
  btn: {
    minHeight: 56,
    [theme.breakpoints.up(768)]: {
      marginLeft: "auto",
    },
  },
}));

export const cityInit = { latitude: -27.4709989, longitude: 153.0252 };

const FoodCourt = ({ cities, reqZomatoCusinesAction }: IFCProps) => {
  const classes = useStyles();
  const { option, handleOptionChange } = useOption();
  const cuisineId = (getIdsByOpt(cuisines, option.cuisine) as number) || 177;
  const cityId = (getIdsByOpt(cities, option.city) as CityGeo) || cityInit;

  useEffect(() => {
    reqZomatoCusinesAction(cuisineId, cityId.latitude, cityId.longitude);
  }, []);
  return (
    <Container>
      <Titles
        title="Food Court"
        subTitle="Foodies trendy in the city"
        style={{ marginBottom: "1.5rem" }}
      />
      <div className={classes.optionWrapper}>
        <Options
          options={cities}
          init="city"
          handleChange={handleOptionChange}
          option={option.city}
        />
        <Options
          options={cuisines}
          init="cuisine"
          handleChange={handleOptionChange}
          option={option.cuisine}
        />
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.btn}
          onClick={() =>
            reqZomatoCusinesAction(cuisineId, cityId.latitude, cityId.longitude)
          }
        >
          Explore desired meal
        </Button>
      </div>
    </Container>
  );
};

export default FoodCourt;
