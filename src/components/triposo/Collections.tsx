import React from "react";
import TriposoCollection from "./Collection";
import { Grid, Container, makeStyles } from "@material-ui/core";
import Title from "../Title";

import {
  Catarina_Sousa,
  Josh_Sorenson,
  Porapak_Apichodilok,
} from "../../assets/collections";

const useStyles = makeStyles({
  container: {
    marginTop: "4rem",
  },
  gridWrapper: {
    margin: "0 auto",
    textAlign: "center",
  },
});

const Collections = () => {
  const classes = useStyles();
  const img = [Catarina_Sousa, Josh_Sorenson, Porapak_Apichodilok];
  const cols = [
    {
      id: "sightseeing",
      title: "Attractions on your way",
      description:
        "Enjoy the most popular natural attractions,parks,buildings and museums",
    },
    {
      id: "do",
      title: "Activities in the locality",
      description:
        "Where you find your outdoor adventures and indoor facilities",
    },
    {
      id: "nightlife",
      title: "night life at your fingers",
      description: "Explore local colorful and alien culture under the light",
    },
  ];
  return (
    <Container className={classes.container}>
      <Title text="Your destination is over there,one more step" />
      <div className={classes.gridWrapper}>
        <Grid container spacing={2}>
          {cols.map((col, index) => (
            <TriposoCollection
              tCol={col}
              key={index}
              image={img[index]}
              bpNumber={4}
            />
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default Collections;
