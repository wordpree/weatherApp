import React from "react";
import { Titles } from "../";
import Options from "./Options";
import { ITriposoPoi } from "../../util/type";
import { Container, makeStyles, Button } from "@material-ui/core";

interface IFCProps {
  cities: Pick<ITriposoPoi, "coordinates" | "name">[];
}
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
const FoodCourt = ({ cities }: IFCProps) => {
  const cusines = [
    {
      cuisine_id: 401,
      cuisine_name: "Asian Fusion",
    },
    {
      cuisine_id: 131,
      cuisine_name: "Australian",
    },
    {
      cuisine_id: 5,
      cuisine_name: "Bakery",
    },
  ];
  const classes = useStyles();
  return (
    <Container>
      <Titles
        title="Food Court"
        subTitle="Foodies trendy in the city"
        style={{ marginBottom: "1.5rem" }}
      />
      <div className={classes.optionWrapper}>
        <Options option={cities} init="city" />
        <Options option={cusines} init="cusines" />
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.btn}
        >
          Explore desired meal
        </Button>
      </div>
    </Container>
  );
};

export default FoodCourt;
