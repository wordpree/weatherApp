import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../Arrow";
import { StyledImgWrapper, StyledTypo } from "./styled";
import {
  dl,
  dm,
  el,
  em,
  ml,
  mm,
  tl,
  tm,
  ds,
  es,
  ms,
  ts
} from "../../assets/hero";

const Banner = () => {
  const largeImg = [dl, el, ml, tl];
  const mediumImg = [dm, em, mm, tm];
  const smallImg = [ds, es, ms, ts];

  const md = useMediaQuery("(min-width:960px)");
  const lg = useMediaQuery("(min-width:1248px)");
  const properImg = lg ? largeImg : md ? mediumImg : smallImg;

  const author = ["Dan Freeman", "Eva Dang", "Manuel Cosentino", "todd kent"];
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const carousel = properImg.map((img, key) => (
    <div key={key}>
      <StyledImgWrapper style={{ backgroundImage: `url(${img})` }}>
        <StyledTypo variant="caption">
          By {author[key]} on{" "}
          <a
            href="https://unsplash.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Unsplash
          </a>
        </StyledTypo>
      </StyledImgWrapper>
    </div>
  ));
  return <Slider {...settings}>{carousel}</Slider>;
};

export default Banner;
