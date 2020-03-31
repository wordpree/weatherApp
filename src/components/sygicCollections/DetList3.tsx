import React from "react";
import { ISygicPlace } from "../../util/type";
import { Link, LinkProps } from "react-router-dom";
import { Omit } from "@material-ui/types";
import {
  Card,
  CardMedia,
  Typography,
  CardActionArea,
  makeStyles,
  Button
} from "@material-ui/core";
import { SubTitle } from "./SubTitle";

interface ISCLProps {
  place: ISygicPlace[];
}
const useStyles = makeStyles(theme => ({
  entry: {
    marginTop: "2.5rem"
  },
  cardWrapper: {
    marginBottom: "2rem",
    [theme.breakpoints.up(768)]: {
      display: "flex"
    }
  },
  card: {
    [theme.breakpoints.up(768)]: {
      flex: "1 0 33%",
      maxWidth: "33%"
    }
  },
  cardAct: {
    transition: "transform 0.5s ease-in-out 0.1s",
    "&:hover": {
      transform: "scale(1.05)"
    }
  },
  media: {
    paddingTop: "50%",
    [theme.breakpoints.up(768)]: {
      paddingTop: "85%"
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "68%"
    },
    [theme.breakpoints.up(1024)]: {
      paddingTop: "60%"
    },
    [theme.breakpoints.up(1125)]: {
      paddingTop: "50%"
    },
    minWidth: 296
  },
  cardCont: {
    position: "relative",
    [theme.breakpoints.up(768)]: {
      flexGrow: 0,
      flexShrink: 1,
      maxWidth: "100%",
      marginLeft: "2rem"
    },
    [theme.breakpoints.up(1024)]: {
      maxWidth: "60%"
    },
    letterSpacing: 1.2,
    "&>*": {
      marginTop: "0.5rem"
    }
  },
  title: {
    color: "#00535e",
    fontWeight: "bold"
  },
  btn: {
    marginTop: "1rem",
    color: "#00535e",
    borderColor: "#00535e",
    "&:hover": {
      color: "#ddd",
      backgroundColor: "#00535e"
    }
  }
}));
const DetList3 = ({ place }: ISCLProps) => {
  const classes = useStyles();
  if (place.length === 0) return <div />;
  const LinkForward = React.forwardRef<any, Omit<LinkProps, "to">>(
    (props, ref) => (
      <Link to={{ pathname: `/attraction/` }} ref={ref} {...props} />
    )
  );

  return (
    <>
      <SubTitle title="Keep going on your new finding" />
      <div className={classes.entry}>
        {place.map(item => {
          const imgUrl = item.main_media.media[0].url_template.replace(
            "{size}",
            "700x450"
          );
          return (
            <div className={classes.cardWrapper} key={item.id}>
              <Card className={classes.card}>
                <CardActionArea className={classes.cardAct}>
                  <CardMedia
                    image={imgUrl}
                    className={classes.media}
                    component={LinkForward}
                  />
                </CardActionArea>
              </Card>
              <div className={classes.cardCont}>
                <Typography variant="h5" className={classes.title}>
                  {item.name}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {item.address}
                </Typography>
                <Typography variant="body1">{item.perex}</Typography>
                <Button variant="outlined" className={classes.btn}>
                  View more imformation
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DetList3;
