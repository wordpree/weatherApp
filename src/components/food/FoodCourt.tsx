import React, { useEffect } from "react";
import { Titles } from "../";
import Options from "./Options";
import { Container, makeStyles } from "@material-ui/core";
import { FrMotionButton } from "../";
import cusineTypes from "../../util/cusines";
import { City, IZomatoDetailRes } from "../../util/type";
import useOption from "./useOption";
import getIdsByOpt from "./getIdsByOpt";
import CuisineCard from "./CuisineCard";
import { Loading } from "../";
interface IFCProps {
  cities: City[];
  cuisines: IZomatoDetailRes;
  reqZomatoCusinesAction(cuisineId: number, lat: number, lon: number): void;
  reqZomatoCusinesDelete(): void;
}

export type CityGeo = {
  latitude: number;
  longitude: number;
};

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
  cuisinesEntry: {
    marginTop: "1.75rem",
  },
}));

export const cityInit = { latitude: -27.4709989, longitude: 153.0252 };

const FoodCourt = ({
  cities,
  reqZomatoCusinesAction,
  cuisines,
  reqZomatoCusinesDelete,
}: IFCProps) => {
  const classes = useStyles();
  const { option, handleOptionChange } = useOption();
  const cuisineId = (getIdsByOpt(cusineTypes, option.cuisine) as number) || 177;
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
          options={cusineTypes}
          init="cuisine"
          handleChange={handleOptionChange}
          option={option.cuisine}
        />
        <FrMotionButton
          variant="contained"
          size="large"
          color="primary"
          className={classes.btn}
          onClick={() => {
            reqZomatoCusinesDelete();
            reqZomatoCusinesAction(
              cuisineId,
              cityId.latitude,
              cityId.longitude
            );
          }}
        >
          Explore desired meal
        </FrMotionButton>
      </div>
      <div className={classes.cuisinesEntry}>
        {cuisines.length ? (
          cuisines
            .slice(0, 5)
            .map((item) => (
              <CuisineCard cuisine={item} key={item.restaurant.id} />
            ))
        ) : (
          <Loading value={100} />
        )}
      </div>
    </Container>
  );
};

export default FoodCourt;
