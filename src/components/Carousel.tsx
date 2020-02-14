import React from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles({
  container: {
    padding: 0
  }
});

interface ICProps {
  settings: {};
  carousel: JSX.Element[];
  maxWidth: false | "lg";
}

const Carousel = ({ settings, carousel, maxWidth }: ICProps) => {
  const classes = useStyles();
  return (
    <Container maxWidth={maxWidth} className={classes.container}>
      <Slider {...settings}>{carousel}</Slider>
    </Container>
  );
};

export default Carousel;
