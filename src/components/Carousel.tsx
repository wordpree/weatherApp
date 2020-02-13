import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dl, dm, el, em, ml, mm, tl, tm, ds, es, ms, ts } from "../assets/hero";

const useStyles = makeStyles(theme => ({
  img: {
    paddingTop: "37.12%",
    width: "auto",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    [theme.breakpoints.up("md")]: { paddingTop: "23.43%" }
  },
  typo: {
    position: "absolute",
    right: 0,
    bottom: "2%",
    padding: "0.25rem",
    textDecoration: "none",
    backgroundColor: "rgab(0,0,0,0.65)",
    color: "#fff"
  }
}));

const Carousel = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const largeImg = [dl, el, ml, tl];
  const mediumImg = [dm, em, mm, tm];
  const smallImg = [ds, es, ms, ts];

  const classes = useStyles();
  const md = useMediaQuery("(min-width:960px)");
  const sm = useMediaQuery("(max-width:600px)");
  const poperImg = sm ? smallImg : md ? largeImg : mediumImg;
  const author = ["Dan Freeman", "Eva Dang", "Manuel Cosentino", "todd kent"];

  return (
    <div style={{ overflow: "hidden" }}>
      <Slider {...settings}>
        {poperImg.map((img, key) => (
          <div key={key}>
            <div
              style={{ backgroundImage: `url(${img})` }}
              className={classes.img}
            >
              <Typography variant="caption" className={classes.typo}>
                By {author[key]} on{" "}
                <a
                  href="https://unsplash.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Unsplash
                </a>
              </Typography>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
