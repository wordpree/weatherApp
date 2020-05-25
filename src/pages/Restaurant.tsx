import React from "react";
import Header from "../components/header/Header";
import { TravelStore } from "../redux-saga/reducer";
import { connect } from "react-redux";
import { IZomatoCollection } from "../util/type";
import { Grid, Container, makeStyles } from "@material-ui/core";
import { Titles, ScrollToTop } from "../components";

interface IRProps {
  collections: IZomatoCollection[];
}

const useStyles = makeStyles({
  container: {
    margin: "4rem auto 0",
    textAlign: "center",
  },
  gridWrapper: {
    margin: "0 auto",
    textAlign: "center",
  },
});
function Restaurant({ collections }: IRProps) {
  const classes = useStyles();

  return (
    <>
      <ScrollToTop />
      <Header />;
      <Container className={classes.container}>
        <Titles title="We have the selective restaurant for you" subTitle="" />
        <div className={classes.gridWrapper}>
          <Grid container spacing={2}>
            {collections.map((col, index) => (
              <div key={index} />
            ))}
          </Grid>
        </div>
      </Container>
    </>
  );
}

const mapStateToProps = (state: TravelStore) => ({
  detail: state.detail,
});

export default connect(mapStateToProps)(Restaurant);
