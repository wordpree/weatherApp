import React from "react";
import { makeStyles, useMediaQuery } from "@material-ui/core";
import { ITriposoPoi } from "../../util/type";
import IslandsCard from "./IslandsCard";
import { Titles, SliderNav } from "../";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "mdi-material-ui";
import { Arrow } from "../SliderNav";
import IslandsMedium from "./IslandsMedium";

interface IIProps {
  data: ITriposoPoi[];
}
const useStyles = makeStyles((theme) => ({
  entry: {
    entry: {
      margin: "4rem auto",
    },
  },
  titleWrapper: {
    marginTop: "2.5rem",
    marginBottom: "2rem",
    [theme.breakpoints.up(768)]: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  cardWrapper: {
    position: "relative",
  },
  navWrapper: {
    position: "absolute",
    right: "25%",
    transform: "translate(50%)",
    bottom: 0,
  },
}));

const Islands = ({ data }: IIProps) => {
  const classes = useStyles();
  const md = useMediaQuery("(min-width:768px)");
  const PrevArrow = Arrow(ChevronLeft);
  const NextArrow = Arrow(ChevronRight);
  const left = {
    position: "absolute",
    left: "2%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: 999,
  };
  const right = {
    position: "absolute",
    right: "2%",
    top: "50%",
    transform: "translate(50%,-50%)",
    zIndex: 999,
  };
  const settingsMedium = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 650,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settings = {
    ...settingsMedium,
    nextArrow: <NextArrow arrowStyle={right} />,
    prevArrow: <PrevArrow arrowStyle={left} />,
    arrows: true,
    speed: 500,
  };
  let slider: Slider | null = null;
  const lists = (Component: React.SFC<{ data: ITriposoPoi }>) =>
    data.map((item) => <Component key={item.id} data={item} />);
  const handleSlider = (sliderRef: Slider | null) => (slider = sliderRef);
  const preClick = () => slider && slider.slickPrev();
  const nextClick = () => slider && slider.slickNext();
  return (
    <div className={classes.entry}>
      <div className={classes.titleWrapper}>
        <Titles
          title="Most Attractive Islands"
          subTitle="Explore and enjoy Australian top rating islands"
        />
        <SliderNav prevClick={preClick} nextClick={nextClick} />
      </div>
      <div>
        {md ? (
          <div className={classes.cardWrapper}>
            <Slider {...settingsMedium} ref={(slider) => handleSlider(slider)}>
              {lists(IslandsMedium)}
            </Slider>
          </div>
        ) : (
          <Slider {...settings}>{lists(IslandsCard)} </Slider>
        )}
      </div>
    </div>
  );
};

export default Islands;
