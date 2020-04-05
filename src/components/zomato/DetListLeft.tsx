import React from "react";
import { IZomatoDetail } from "../../util/type";
import { Link, LinkProps } from "react-router-dom";
import { Omit } from "@material-ui/types";
import {
  makeStyles,
  Card,
  CardActionArea,
  Grid,
  CardMedia,
  Typography,
  Grow,
  CardContent,
  Divider,
} from "@material-ui/core";
import Title from "../Title";

interface ICProps {
  detail: IZomatoDetail[];
}

const useStyles = makeStyles({
  card: { position: "relative" },
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
    backgroundImage:
      "linear-gradient(to bottom,transparent 0%,rgba(0,0,0,0.4) 65%,rgba(0,0,0,0.6) 80%,#000 100%)",
  },
  media: {
    paddingTop: "63%",
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
    position: "absolute",
    bottom: 0,
    width: "100%",
    color: "#ddd",
    textAlign: "center",
  },
  typo: {},
});

const DetListLeft = ({ detail }: ICProps) => {
  const classes = useStyles();
  const LinkRef = React.forwardRef<any, Omit<LinkProps, "to">>((props, ref) => {
    return <Link ref={ref} {...props} to="#" />;
  });
  return (
    <>
      <Title text="More here" />
      <Grid container spacing={1}>
        {detail.map(({ restaurant }) => (
          <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
            <Grow in={Boolean(restaurant)}>
              <Card className={classes.card}>
                <CardActionArea className={classes.action} component={LinkRef}>
                  <CardMedia
                    image={restaurant.thumb}
                    className={`${classes.media}`}
                  />
                  <div className={classes.gradient} />
                </CardActionArea>
                {restaurant.user_rating && (
                  <CardContent className={classes.contentRate}>
                    <Typography variant="subtitle1">
                      {restaurant.user_rating.aggregate_rating}
                    </Typography>
                  </CardContent>
                )}
                <CardContent className={classes.content}>
                  <Typography variant="h6" className={classes.typo}>
                    {restaurant.name}
                  </Typography>
                  <Typography variant="body2" className={classes.typo}>
                    {restaurant.location.locality_verbose}
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default DetListLeft;
