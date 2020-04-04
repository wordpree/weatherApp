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
  Divider
} from "@material-ui/core";

interface ICProps {
  detail: IZomatoDetail[];
}

const useStyles = makeStyles({
  divider: {
    height: 3,
    background: "#00535e"
  },
  card: { position: "relative" },
  action: {
    position: "relative",
    transition: "all 0.4s ease-in-out 0.1s",
    "&:hover": {
      transform: "scale(1.05)"
    }
  },
  gradient: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute"
  },
  media: {
    paddingTop: "63%"
  },
  content: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    color: "#ddd",
    textAlign: "center"
  },
  typo: {}
});

const DetListLeft = ({ detail }: ICProps) => {
  const classes = useStyles();
  const LinkRef = React.forwardRef<any, Omit<LinkProps, "to">>((props, ref) => {
    return <Link ref={ref} {...props} to="#" />;
  });
  return (
    <>
      <Divider className={classes.divider} />
      <Grid container spacing={1}>
        {detail.map(({ restaurant }) => (
          <Grid item xs={12} sm={6} md={4}>
            <Grow in={Boolean(restaurant)}>
              <Card className={classes.card}>
                <CardActionArea className={classes.action} component={LinkRef}>
                  <CardMedia
                    image={restaurant.thumb}
                    className={`${classes.media}`}
                  />
                  <div className={classes.gradient} />
                </CardActionArea>
                <CardContent className={classes.content}>
                  <Typography variant="h6" className={classes.typo}>
                    {restaurant.name}
                  </Typography>
                  <Typography variant="body2" className={classes.typo}>
                    {restaurant.location.address}
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
