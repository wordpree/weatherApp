import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import { useParams } from "react-router-dom";

import CardDetail from "../CardDetail";
import { Footer, Header, ScrollToTop } from "../";
import Hero from "./Hero";
import { ITriposoPoi } from "../../util/type";
import MoreAttraction from "./MoreAttraction";

interface IPDProps {
  data: ITriposoPoi[];
}

const useStyles = makeStyles({
  container: {
    marginTop: "2rem",
    "&::after": {
      content: "''",
      display: "table",
      clear: "both",
    },
  },
});

const PopularDetail = ({ data }: IPDProps) => {
  const classes = useStyles();
  const { id } = useParams();
  let detail;
  if (id && data.length) {
    detail = data.find((item) => item.id === id) as ITriposoPoi;
  } else {
    return null;
  }
  const moreAttr = data
    .filter((item) => item.id !== id && item.name !== "Uluru")
    .slice(0, 7);
  return (
    <>
      <ScrollToTop />
      <Header />
      <Hero detail={detail} />
      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item md={9} xs={12}>
            <CardDetail detail={detail} />
          </Grid>
          <Grid item md={3} xs={12}>
            <MoreAttraction more={moreAttr} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default PopularDetail;
