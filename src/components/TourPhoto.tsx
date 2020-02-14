import React from "react";
import { Card, CardMedia, CardHeader, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { usePexelsPhotoContextValue } from "../util/apiCall";
import Carousel from "./Carousel";
import { NextArrow, PrevArrow } from "./Arrow";

const useStyles = makeStyles({
  card: { marginRight: "0.5rem" },
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
  console.log(data);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1600,
    slidesToShow: 4,
    slidesToScroll: 4,
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
        <Card className={classes.card}>
          <CardHeader title={title} className={classes.header} />
          <CardMedia
            image={photo.urls.regular}
            className={classes.media}
          ></CardMedia>
        </Card>
      </div>
    );
  });
  return <Carousel settings={settings} carousel={sliderData} maxWidth="lg" />;
};

export default TourPhoto;
