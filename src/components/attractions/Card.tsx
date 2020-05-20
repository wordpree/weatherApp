import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Grow,
  CardContent,
  makeStyles,
} from "@material-ui/core";
import { ITriposoPoi } from "../../util/type";

interface IACProps {
  data: ITriposoPoi;
}

const useStyles = makeStyles((theme) => ({
  card: {
    position: "relative",
    marginRight: "2%",
    marginLeft: "2%",
    marginBottom: "1rem",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    [theme.breakpoints.down(768)]: {
      scrollSnapAlign: "start",
      minWidth: "75%",
      maxWidth: "85%",
    },
    [theme.breakpoints.down(450)]: {
      minWidth: "85%",
    },
  },
  action: {
    position: "relative",
    transition: "all 0.4s ease-in-out 0.1s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  gradient: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    background:
      "linear-gradient(180deg,transparent 0%,rgba(0,0,0,0.2) 30%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0.4) 100%)",
  },
  media: {
    paddingTop: "68.7%",
    [theme.breakpoints.up(600)]: {
      paddingTop: "80%",
    },
    [theme.breakpoints.up(768)]: {
      paddingTop: "100%",
    },
    [theme.breakpoints.up(960)]: {
      paddingTop: "120%",
    },
    [theme.breakpoints.up(1388)]: {
      paddingTop: "150%",
    },
  },
  title: {
    color: "#fff",
    position: "absolute",
    bottom: 10,
    width: "100%",
    textAlign: "center",
  },
  score: {
    padding: "0.25rem 0.5rem",
    background: "#04BFBF",
    position: "absolute",
    color: "#fff",
    top: 0,
    right: 0,
  },
  content: {
    minHeight: 120,
    [theme.breakpoints.down(1388)]: {
      minHeight: 100,
    },
  },
}));

const PopularCard = ({ data }: IACProps) => {
  const classes = useStyles();
  const snippet = data.snippet;
  const brief =
    snippet.length > 140 ? snippet.substring(0, 140) + "..." : snippet;
  return (
    <Grow in={Boolean(data)}>
      <Card className={classes.card}>
        <CardActionArea className={classes.action}>
          <CardMedia
            image={data.images[0].sizes.medium.url}
            className={classes.media}
          />
          <div className={classes.gradient} />
          <Typography variant="h6" className={classes.title}>
            {data.name}
          </Typography>
        </CardActionArea>
        <Typography variant="subtitle1" className={classes.score}>
          {data.score.toFixed(2)}
        </Typography>
        <CardContent className={classes.content}>
          <Typography variant="body2">{brief}</Typography>
        </CardContent>
      </Card>
    </Grow>
  );
};

export default PopularCard;
