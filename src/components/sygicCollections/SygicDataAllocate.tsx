import React, { useState } from "react";
import { Grid, Container, Button, makeStyles } from "@material-ui/core";
import { useSygicContextValue } from "../../util/apiCall";
import { ISygicPlace } from "../../util/type";
import SygicCollection from "./SygicPlaces";
import SygicHotels from "./SygicHotels";
import Loading from "../Loading";
import Title from "../Title";

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

function SygicDataAllocate() {
  const { loading, places, info } = useSygicContextValue();
  const [more, setMore] = useState(false);
  const classes = useStyles();
  const placesWtc = places.slice(0, info.length);
  const placesHtl = places.slice(info.length);

  const gridItemWtc = (places: Array<ISygicPlace>) =>
    places.map((place: ISygicPlace, key: number) => (
      <Grid item key={key} xs={12} sm={6} md={4} lg={3}>
        <SygicCollection place={place} />
      </Grid>
    ));

  const moreBtn = !more && (
    <div className={classes.btnWrapper}>
      <Button
        variant="contained"
        onClick={() => setMore(true)}
        className={classes.loadBtn}
      >
        Load More
      </Button>
    </div>
  );

  const sygicHotels = placesHtl
    .slice(0, 3)
    .map((item, index) => <SygicHotels places={item} key={index} />);

  if (!loading) {
    return (
      <Container>
        <div>
          <Title text={info.names[0]} />
          <Grid container spacing={2}>
            {gridItemWtc(placesWtc.slice(0, 8))}
            {more && gridItemWtc(placesWtc.slice(8))}
          </Grid>
          {moreBtn}
        </div>
        <div>
          <Title text={info.names[1]} />
          {sygicHotels}
        </div>
      </Container>
    );
  } else {
    return <Loading value={100} />;
  }
}
export default SygicDataAllocate;
