import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "./Carousel";
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

const Banner = () => {
  const largeImg = [dl, el, ml, tl];
  const mediumImg = [dm, em, mm, tm];
  const smallImg = [ds, es, ms, ts];
  const classes = useStyles();
  const md = useMediaQuery("(min-width:960px)");
  const sm = useMediaQuery("(max-width:600px)");
  const properImg = sm ? smallImg : md ? largeImg : mediumImg;
  const author = ["Dan Freeman", "Eva Dang", "Manuel Cosentino", "todd kent"];
  const settings = {
    arrows: false,
    dots: true,
    fade: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const carousel = properImg.map((img, key) => (
    <div key={key}>
      <div style={{ backgroundImage: `url(${img})` }} className={classes.img}>
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
  ));
  return <Carousel carousel={carousel} settings={settings} maxWidth={false} />;
};

export default Banner;
