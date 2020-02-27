import React from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ICProps {
  settings: {};
  carousel: JSX.Element[];
}

const Carousel = ({ settings, carousel }: ICProps) => {
  return <Slider {...settings}>{carousel}</Slider>;
};

export default Carousel;
