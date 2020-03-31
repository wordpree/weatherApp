import React from "react";
import SygicCollection from "./Collection";
import { Grid, Container, makeStyles } from "@material-ui/core";
import { TravelStore } from "../../redux-saga/reducer";
import { connect } from "react-redux";
import { ISygicCollection } from "../../util/type";

import {
  Catarina_Sousa,
  Josh_Sorenson,
  Porapak_Apichodilok
} from "../../assets/collections";

interface ISProps {
  collections: ISygicCollection[];
}

const useStyles = makeStyles({
  gridWrapper: {
    margin: "0 auto",
    textAlign: "center"
  }
});

const Collections = ({ collections }: ISProps) => {
  const classes = useStyles();
  const img = [Catarina_Sousa, Josh_Sorenson, Porapak_Apichodilok];

  return (
    <Container>
      <div className={classes.gridWrapper}>
        <Grid container spacing={2}>
          {collections.map((col, index) => (
            <SygicCollection col={col} key={index} image={img[index]} />
          ))}
        </Grid>
      </div>
    </Container>
  );
};

const mapStateToProps = (state: TravelStore) => ({
  collections: state.collections
});
export default connect(mapStateToProps)(Collections);
