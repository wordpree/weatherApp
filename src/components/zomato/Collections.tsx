import React from "react";
import { connect } from "react-redux";
import ZCollection from "./Collection";
import { TravelStore } from "../../redux-saga/reducer";
import { IZomatoCollectionRes } from "../../util/type";
import { Grid, Container, makeStyles, Button } from "@material-ui/core";
import SubTitle from "../SubTitle";

interface ICProps {
  collections: IZomatoCollectionRes;
}

const useStyles = makeStyles({
  container: {
    margin: "4rem auto 0",
    textAlign: "center"
  },
  gridWrapper: {
    margin: "0 auto",
    textAlign: "center"
  },
  btn: {
    transition: "all 0.4s ease-in-out",
    margin: "2rem  1rem auto",
    color: "#ddd",
    fontWeight: "bold",
    background: "#00535e",
    "&:hover": {
      background: "#003138",
      color: "#ddd",
      borderColor: "#00535e"
    }
  }
});

const ZCollections = ({ collections }: ICProps) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <SubTitle title="Enjoy the local cuisines of your selection" />
      <div className={classes.gridWrapper}>
        <Grid container spacing={3}>
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
      <Button variant="outlined" className={classes.btn} size="large">
        Learn more
      </Button>
    </Container>
  );
};

const mapStateToProps = (state: TravelStore) => ({
  detail: state.detail,
  collections: state.zCollections.slice(0, 4)
});

export default connect(mapStateToProps)(ZCollections);
