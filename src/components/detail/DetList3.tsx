import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { Omit } from "@material-ui/types";
import {
  Card,
  CardMedia,
  Typography,
  CardActionArea,
  makeStyles,
  Button,
} from "@material-ui/core";
import Title from "../Title";
import { ITriposoPoi, IZomatoDetail } from "../../util/type";
import { sortDetailsData } from "../../util/utils";

interface ISCLProps {
  detail: IZomatoDetail[] | ITriposoPoi[];
}

const useStyles = makeStyles((theme) => ({
  entry: {
    marginTop: "2.5rem",
  },
  cardWrapper: {
    marginBottom: "2rem",
    [theme.breakpoints.up(768)]: {
      display: "flex",
    },
  },
  card: {
    [theme.breakpoints.up(768)]: {
      flex: "1 0 33%",
      maxWidth: "33%",
    },
  },
  cardAct: {
    transition: "transform 0.5s ease-in-out 0.1s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  media: {
    paddingTop: "50%",
    [theme.breakpoints.up(768)]: {
      paddingTop: "85%",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "68%",
    },
    [theme.breakpoints.up(1024)]: {
      paddingTop: "60%",
    },
    [theme.breakpoints.up(1125)]: {
      paddingTop: "50%",
    },
    minWidth: 296,
  },
  cardCont: {
    position: "relative",
    [theme.breakpoints.up(768)]: {
      flexGrow: 0,
      flexShrink: 1,
      maxWidth: "100%",
      marginLeft: "2rem",
      textAlign: "left",
    },
    [theme.breakpoints.up(1024)]: {
      maxWidth: "60%",
    },
    letterSpacing: 1.2,
    "&>*": {
      marginTop: "0.5rem",
    },
  },
  title: {
    color: "#00535e",
    fontWeight: "bold",
  },
  btn: {
    marginTop: "1rem",
    color: "#01B3A7",
    borderColor: "#01B3A7",
    "&:hover": {
      color: "#ddd",
      backgroundColor: "#01B3A7",
    },
  },
  span: {
    color: "#ccc",
    padding: "4px 2px",
    backgroundColor: "#01B3A7",
  },
}));
const DetList3 = ({ detail }: ISCLProps) => {
  const classes = useStyles();

  const LinkForward = React.forwardRef<any, Omit<LinkProps, "to">>(
    (props, ref) => (
      <Link to={{ pathname: `/attraction/` }} ref={ref} {...props} />
    )
  );
  let data: (IZomatoDetail | ITriposoPoi)[] = detail;
  return (
    <>
      <Title text="Keep going on your new finding" />
      <div className={classes.entry}>
        {data.map((item) => {
          const ret = sortDetailsData(item);
          return (
            ret && (
              <div className={classes.cardWrapper} key={ret.id}>
                <Card className={classes.card}>
                  <CardActionArea className={classes.cardAct}>
                    <CardMedia
                      image={ret.img}
                      className={classes.media}
                      component={LinkForward}
                    />
                  </CardActionArea>
                </Card>
                <div className={classes.cardCont}>
                  <Typography variant="h5" className={classes.title}>
                    {ret.name}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {ret.address}
                  </Typography>
                  {ret.establishment && (
                    <>
                      <Typography variant="body2">
                        {`${ret.cuisines} - ${ret.establishment[0]}`}
                      </Typography>
                      <Typography variant="subtitle1">
                        <span className={classes.span}>
                          {ret.rating.aggregate_rating}
                        </span>
                        {` - ${ret.rating.votes} reviews`}
                      </Typography>
                    </>
                  )}
                  <Typography variant="body1">
                    {ret.snippet && ret.snippet.substring(0, 120) + "..."}
                  </Typography>
                  <Button variant="outlined" className={classes.btn}>
                    View more imformation
                  </Button>
                </div>
              </div>
            )
          );
        })}
      </div>
    </>
  );
};

export default DetList3;