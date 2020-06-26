import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import { useParams, useRouteMatch } from "react-router-dom";
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

const AttractionDetail = ({ data }: IPDProps) => {
  const classes = useStyles();
  const { id } = useParams();
  let { url } = useRouteMatch();
  if (!data || data.length === 0 || !id) {
    return null;
  }

  const getHeroImg = (data: Pick<ITriposoPoi, "structured_content">) => {
    const { images } = data.structured_content;
    const lookup = images.find((img) => {
      const { width, height } = img.sizes.medium;
      return width > 600 && height > 400;
    });
    return lookup ? lookup : images[0];
  };
  const getSelectedItem = (data: ITriposoPoi[]) =>
    data.find((item) => item.id === id) as ITriposoPoi;
  const getMoreAttraction = (data: ITriposoPoi[]) => {
    const moreAttr = data
      .filter((item) => item.id !== id && item.name !== "Uluru")
      .slice(0, 7);
    return moreAttr;
  };

  const selectedItem = getSelectedItem(data);
  const { name, structured_content } = selectedItem;
  const more = getMoreAttraction(data);
  const heroImgData = getHeroImg({ structured_content });

  return (
    <>
      <ScrollToTop />
      <Header />
      <Hero imgData={heroImgData} title={name} />
      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item md={9} xs={12}>
            <CardDetail detail={{ structured_content }} />
          </Grid>
          <Grid item md={3} xs={12}>
            <MoreAttraction more={more} path={url} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default AttractionDetail;
