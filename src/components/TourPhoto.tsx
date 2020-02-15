import React from "react";
import { Card, CardMedia, CardHeader, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import { usePexelsPhotoContextValue } from "../util/apiCall";
import Carousel from "./Carousel";
import { NextArrow, PrevArrow } from "./Arrow";

const useStyles = makeStyles({
  sliderWrapper: { padding: 8 },
  card: {
    "&:hover": {
      boxShadow:
        "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)"
    }
  },
  header: { background: "#344E57" },
  media: {
    paddingTop: "85%"
  },
  typo: { color: "rgba(207,201,122,0.6)" },
  anchor: {
    transition: "all 1s",
    textDecoration: "none",
    color: "rgba(207,201,122,0.7)",
    "&:hover": {
      textDecoration: "underline",
      color: "rgb(207,201,122)"
    }
  }
});

const TourPhoto = () => {
  const data = usePexelsPhotoContextValue();
  const classes = useStyles();
  const lg = useMediaQuery("(min-width:1280px)");
  const md = useMediaQuery("(min-width:960px)");
  const sm = useMediaQuery("(max-width:600px)");
  const silides = lg ? 4 : md ? 3 : sm ? 1 : 2;
  console.log(data);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1600,
    slidesToShow: silides,
    slidesToScroll: silides,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const sliderData = data.photos.map((photo, index) => {
    const title = (
      <Typography variant="caption" className={classes.typo}>
        By{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={classes.anchor}
          href={photo.link}
        >
          {photo.author}
        </a>{" "}
        on{" "}
        <a
          href="https://unsplash.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.anchor}
        >
          Unsplash
        </a>
      </Typography>
    );
    return (
      <div key={index}>
        <div className={classes.sliderWrapper}>
          <Card elevation={2} className={classes.card}>
            <CardHeader title={title} className={classes.header} />
            <CardMedia
              image={photo.urls.regular}
              className={classes.media}
            ></CardMedia>
          </Card>
        </div>
      </div>
    );
  });
  return <Carousel settings={settings} carousel={sliderData} maxWidth="lg" />;
};

export default TourPhoto;
