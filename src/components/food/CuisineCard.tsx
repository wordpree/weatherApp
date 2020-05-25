import React from "react";
import { IZomatoDetail } from "../../util/type";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Grow,
  CardContent,
  makeStyles,
  List,
  Button,
} from "@material-ui/core";
import ListInfo from "./ListInfo";
import extraImg from "../../assets/Dmitry-Zvolskiy-Pexels.jpg"; //Photo by Dmitry Zvolskiy from Pexels

interface ICCProps {
  cuisine: IZomatoDetail;
}

const useStyles = makeStyles((theme) => ({
  card: {
    position: "relative",
    marginBottom: "1.5rem",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    [theme.breakpoints.up(768)]: {
      display: "flex",
    },
  },
  cardWrapper: {
    position: "relative",
    [theme.breakpoints.up(768)]: {
      flex: "1 0 30%",
    },
  },
  action: {
    position: "relative",
    transition: "all 0.4s ease-in-out 0.1s",
    "&:hover": {
      transform: "scale(1.05)",
    },
    [theme.breakpoints.up(768)]: {
      height: "100%",
      "&:hover": {
        transform: "scale(1.015)",
      },
    },
  },
  gradient: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    background:
      "linear-gradient(180deg,transparent 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0.5) 100%)",
  },
  media: {
    paddingTop: "85%",
    height: 0,
    [theme.breakpoints.up(450)]: {
      paddingTop: "56.25%",
    },
    [theme.breakpoints.up(600)]: {
      paddingTop: "43.75%",
    },
    [theme.breakpoints.up(768)]: {
      height: "100%",
    },
  },
  title: {
    [theme.breakpoints.up(768)]: {
      display: "none",
    },
    color: "#fff",
    position: "absolute",
    textTransform: "uppercase",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    border: "3px solid #fff",
    textAlign: "center",
    padding: "1.125rem 2rem",
    width: "78%",
    fontWeight: "bold",
    [theme.breakpoints.down(450)]: {
      padding: "1rem 1.5rem",
    },
  },
  titleLg: {
    display: "none",
    [theme.breakpoints.up(768)]: {
      display: "inline-block",
      fontWeight: 400,
      letterSpacing: 1.75,
    },
  },
  resType: {
    [theme.breakpoints.up(768)]: {
      display: "none",
    },
    padding: "0.25rem 0.5rem",
    background: "#FABE0E",
    position: "absolute",
    color: "#fff",
    top: 0,
    right: 0,
  },
  moreBtn: {
    display: "none",
    [theme.breakpoints.up(768)]: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",
      display: "inline-block",
      background: "#FABE0E",
      color: "#fff",
      fontWeight: 500,
      width: "43.75%",
      textTransform: "capitalize",
      "&:hover": {
        background: "#EAAF04",
      },
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up(768)]: {
      flex: "1 0 50%",
    },
  },
  info: {
    display: "flex",
    alignItems: "center",
  },
}));

const CuisineCard = ({ cuisine }: ICCProps) => {
  const { restaurant } = cuisine;
  const classes = useStyles();
  const info = {
    rating: restaurant.user_rating.aggregate_rating,
    address: restaurant.location.address,
    vote: restaurant.user_rating.votes,
    phone: restaurant.phone_numbers,
    timings: restaurant.timings,
  };

  const image =
    restaurant.featured_image.trim().length === 0
      ? extraImg
      : restaurant.featured_image;
  return (
    <Grow in={Boolean(cuisine)}>
      <Card className={classes.card}>
        <div className={classes.cardWrapper}>
          <CardActionArea className={classes.action}>
            <CardMedia image={image} className={classes.media} />
            <div className={classes.gradient} />
          </CardActionArea>
          <Typography variant="h6" className={classes.title}>
            {restaurant.name}
          </Typography>
          <Typography variant="caption" className={classes.resType}>
            {restaurant.cuisines}--{restaurant.establishment}
          </Typography>
          <Button className={classes.moreBtn} size="large">
            More Details
          </Button>
        </div>
        <CardContent className={classes.content}>
          <Typography variant="h6" className={classes.titleLg}>
            {restaurant.name}
          </Typography>
          <List>
            <ListInfo {...info} />
          </List>
        </CardContent>
      </Card>
    </Grow>
  );
};

export default CuisineCard;
