import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  makeStyles,
  CardContent,
  Typography,
  Button,
  Fade,
} from "@material-ui/core";
import { ITriposoPoi, IZomatoDetail } from "../../util/type";
import { sortDetailsData } from "../../util/utils";

interface ISCLProps {
  detail: IZomatoDetail | ITriposoPoi;
}

const useStyles = makeStyles((theme) => ({
  card: {
    position: "relative",
  },
  media: {
    paddingTop: "130%",
    [theme.breakpoints.up(500)]: {
      paddingTop: "80%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: "50%",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "35%",
    },
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  contentRate: {
    textAlign: "center",
    color: "#ddd",
    letterSpacing: 1.5,
    position: "absolute",
    padding: "2%",
    top: 0,
    right: 0,
    background: "#01B3A7",
  },
  content: {
    textAlign: "center",
    color: "#ddd",
    letterSpacing: 1.5,
    position: "absolute",
    padding: "2%",
    bottom: 0,
    left: "50%",
    width: "100%",
    transform: "translateX(-50%)",
    backgroundImage:
      "linear-gradient( to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,0.3) 30%,rgba(0,0,0,0.68) 100% )",
  },
  typo: {
    fontWeight: "bold",
  },
  btn: {
    transition: "all 0.4s ease-in-out",
    margin: "1rem  0 auto",
    color: "#ddd",
    borderColor: "#fff",
    "&:hover": {
      background: "#01B3A7",
      color: "#ddd",
      borderColor: "#01B3A7",
    },
  },
}));

const DetList1 = ({ detail }: ISCLProps) => {
  const classes = useStyles();
  const ret = sortDetailsData(detail);

  return (
    ret && (
      <Fade in={Boolean(detail)}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia image={ret.img} className={classes.media} />
          </CardActionArea>
          {ret.rating && (
            <CardContent className={classes.contentRate}>
              <Typography variant="h4">
                {ret.rating.aggregate_rating}
              </Typography>
            </CardContent>
          )}
          <CardContent className={classes.content}>
            <Typography variant="h4" className={classes.typo}>
              {ret.name}
            </Typography>
            <Typography variant="body1" className={classes.typo}>
              {ret.address}
              {ret.snippet && ret.snippet.substring(0, 120) + "..."}
            </Typography>
            {ret.establishment && (
              <Typography variant="body2" className={classes.typo}>
                {`${ret.cuisines} - ${ret.establishment[0]}`}
              </Typography>
            )}
            <Button variant="outlined" className={classes.btn}>
              Learn more
            </Button>
          </CardContent>
        </Card>
      </Fade>
    )
  );
};

export default DetList1;
