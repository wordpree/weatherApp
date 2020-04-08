import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  makeStyles,
  Typography,
  Fade,
  CardContent,
} from "@material-ui/core";
import { ITriposoPoi, IZomatoDetail } from "../../util/type";
import { sortDetailsData } from "../../util/utils";
import Title from "../Title";

interface ISCLProps {
  detail: IZomatoDetail[] | ITriposoPoi[];
}

const useStyles = makeStyles((theme) => ({
  entry: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down(768)]: {
      overflowX: "scroll",
      scrollSnapType: "x mandatory",
      scrollbarWidth: "none" /* Firefox */,
      msOverflowStyle: "none" /* ie 10+*/,
      "&::webkitScrollbar": {
        /* webkit */
        width: 0,
        height: 0,
      },
    },
  },
  cardWrapper: {
    maxWidth: "32.5%",
    minWidth: "32.5%",
    [theme.breakpoints.down(768)]: {
      scrollSnapAlign: "start",
      minWidth: "75%",
      paddingRight: 12,
      paddingLeft: 0,
    },
  },
  card: {
    position: "relative",
  },
  cardAct: {
    transition: "all 0.6s ease-in-out 0.1s",
    position: "relative",
    "&:hover": {
      transform: "scale(1.08)",
    },
  },
  media: {
    paddingTop: "66%",
  },
  contentRate: {
    textAlign: "center",
    color: "#ddd",
    letterSpacing: 1.5,
    position: "absolute",
    padding: "0.5rem !important",
    top: 0,
    right: 0,
    background: "#01B3A7",
  },
  content: {
    letterSpacing: 1.2,
    background: "#01B3A7",
    color: "#fff",
    fontWeight: "bold",
    minHeight: 170,
  },
  des: {},
  typo2: {
    padding: "0.5rem",
  },
}));

const DetList2 = ({ detail }: ISCLProps) => {
  const classes = useStyles();
  let data: (IZomatoDetail | ITriposoPoi)[] = detail;
  return (
    <>
      <Title text="Enjoy where you are starting" />
      <div className={classes.entry}>
        {data.map((item) => {
          const ret = sortDetailsData(item);
          return (
            ret && (
              <div key={ret.id} className={classes.cardWrapper}>
                <Fade in={Boolean(data)}>
                  <Card className={classes.card}>
                    <CardActionArea className={classes.cardAct}>
                      <CardMedia image={ret.img} className={classes.media} />
                    </CardActionArea>
                    <CardContent className={classes.content}>
                      <Typography variant="h5">{ret.name}</Typography>
                      <Typography variant="body1">{ret.address}</Typography>
                      {ret.establishment && (
                        <Typography variant="body2" className={classes.typo2}>
                          {`${ret.cuisines} - ${ret.establishment[0]}`}
                        </Typography>
                      )}
                      <Typography variant="body1" className={classes.des}>
                        {ret.snippet && ret.snippet.substring(0, 120) + "..."}
                      </Typography>
                    </CardContent>
                    {ret.rating && (
                      <CardContent className={classes.contentRate}>
                        <Typography variant="subtitle1">
                          {ret.rating.aggregate_rating}
                        </Typography>
                      </CardContent>
                    )}
                  </Card>
                </Fade>
              </div>
            )
          );
        })}
      </div>
    </>
  );
};

export default DetList2;
