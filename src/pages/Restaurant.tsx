import React from "react";
import Header from "../components/header/Header";
import { TravelStore } from "../redux-saga/reducer";
import { connect } from "react-redux";
import { IZomatoCollection } from "../util/type";
import { Grid, Container, makeStyles } from "@material-ui/core";
import { SubTitle, ScrollToTop } from "../components";
import { ZCollection } from "../components";

interface IRProps {
  collections: IZomatoCollection[];
}

const useStyles = makeStyles({
  container: {
    margin: "4rem auto 0",
    textAlign: "center"
  },
  gridWrapper: {
    margin: "0 auto",
    textAlign: "center"
  }
});
function Restaurant({ collections }: IRProps) {
  const classes = useStyles();

  return (
    <>
      <ScrollToTop />
      <Header />;
      <Container className={classes.container}>
        <SubTitle title="We have the selective restaurant for you" />
        <div className={classes.gridWrapper}>
          <Grid container spacing={2}>
            {collections.map((col, index) => (
              <ZCollection
                zCol={col}
                key={index}
                bpNumber={6}
                image={col.collection.image_url}
              />
            ))}
          </Grid>
        </div>
      </Container>
    </>
  );
}

const mapStateToProps = (state: TravelStore) => ({
  detail: state.detail,
  collections: state.zCollections
});

export default connect(mapStateToProps)(Restaurant);
