import React, { useState } from "react";
import { Grid, Container, Button, makeStyles } from "@material-ui/core";
import { useSygicContextValue, SygicPlace } from "../../util/apiCall";
import SygicCollection from "./SygicCollection";
import Loading from "../Loading";
import Title from "../Title";

export interface ISData {
  loading: boolean;
  name: string;
  placeArray: Array<SygicPlace>;
}

const useStyles = makeStyles({
  loadBtn: {
    background: "rgba(255, 204, 14,0.8)",
    letterSpacing: 1.2,
    "&:hover": {
      background: "rgb(255, 204, 14)"
    }
  },
  btnWrapper: {
    textAlign: "center",
    margin: "2rem auto"
  }
});

function SygicCollections() {
  const classes = useStyles();
  const data: ISData = useSygicContextValue();
  const [load, setLoad] = useState(false);
  const grid = (data: Array<SygicPlace>) =>
    data.map((item: SygicPlace, key: number) => (
      <Grid item key={key} xs={12} sm={6} md={4} lg={3}>
        <SygicCollection data={item} />
      </Grid>
    ));
  const collections = (
    <Container>
      <Title text={data.name} />
      <Grid container spacing={2}>
        {grid(data.placeArray.slice(0, 8))}
        {load && grid(data.placeArray.slice(8))}
      </Grid>
      {!load && (
        <div className={classes.btnWrapper}>
          <Button
            variant="contained"
            onClick={() => setLoad(true)}
            className={classes.loadBtn}
          >
            Load More
          </Button>
        </div>
      )}
    </Container>
  );

  return !data.loading ? collections : <Loading value={100} />;
}

export default SygicCollections;
