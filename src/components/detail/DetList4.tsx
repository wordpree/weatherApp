import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { Omit } from "@material-ui/types";
import {
  Card,
  CardMedia,
  Typography,
  CardActionArea,
  makeStyles
} from "@material-ui/core";
import SubTitle from "../SubTitle";
import { ISygicPlace, IZomatoDetail } from "../../util/type";
import { sortDetailsData } from "../../util/utils";

interface ISCLProps {
  detail: IZomatoDetail[] | ISygicPlace[];
}

const useStyles = makeStyles(theme => ({
  entry: {
    [theme.breakpoints.between(450, 768)]: {
      maxWidth: "80%",
      margin: "0 auto"
    },
    [theme.breakpoints.up(768)]: {
      display: "flex",
      justifyContent: "center"
    },
    marginBottom: "4rem"
  },
  cardWrapper: {
    marginBottom: "3rem",
    position: "relative",
    paddingBottom: "1.75rem",
    [theme.breakpoints.up(768)]: {
      flex: "1 1 48%",
      maxWidth: "48%",
      marginRight: "1%"
    }
  },
  card: {},
  cardAct: {
    transition: "all 0.6s ease-in-out 0.1s",
    position: "relative",
    "&:hover": {
      transform: "scale(1.08)"
    }
  },
  back: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(180deg, transparent 0%,transparent 50%, #000 100%)"
  },
  media: {
    paddingTop: "86%",
    minWidth: 296
  },
  cardCont: {
    padding: "5%",
    textAlign: "center",
    boxShadow: "0 0 10px 0 rgba(0,0,0,.27)",
    letterSpacing: 1.2,
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translate(-50%)",
    width: "80%",
    background: "#fff",
    "&>*": {
      marginBottom: "0.75rem"
    }
  },
  title: { color: "#00535e", fontWeight: "bold" }
}));

const DetList4 = ({ detail }: ISCLProps) => {
  const classes = useStyles();
  let data: (IZomatoDetail | ISygicPlace)[] = detail;
  const LinkForward = React.forwardRef<any, Omit<LinkProps, "to">>(
    (props, ref) => (
      <Link to={{ pathname: `/attraction/` }} ref={ref} {...props} />
    )
  );
  return (
    <>
      <SubTitle title="Change everything to your recent memory" />
      <div className={classes.entry}>
        {data.map(item => {
          const ret = sortDetailsData(item);
          return (
            <div className={classes.cardWrapper} key={ret.id}>
              <Card className={classes.card}>
                <CardActionArea className={classes.cardAct}>
                  <CardMedia
                    image={ret.img}
                    className={classes.media}
                    component={LinkForward}
                  />
                  <div className={classes.back} />
                </CardActionArea>
              </Card>
              <div className={classes.cardCont}>
                <Typography variant="body1">{ret.perex}</Typography>
                <Typography variant="h5" className={classes.title}>
                  {ret.name}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DetList4;
