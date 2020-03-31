import React from "react";
import {
  Card,
  CardActionArea,
  Grid,
  CardMedia,
  Typography,
  makeStyles,
  Grow,
  CardContent
} from "@material-ui/core";
import { Link, LinkProps } from "react-router-dom";
import { Omit } from "@material-ui/types";
import { ISygicCollection } from "../../util/type";

interface ISCProps {
  col: ISygicCollection;
  image: string;
}

const useStyles = makeStyles(theme => ({
  card: { position: "relative" },
  action: {
    position: "relative",
    transition: "all 0.4s ease-in-out 0.1s",
    "&:hover": {
      transform: "scale(1.05)"
    }
  },
  media: {
    paddingTop: "100%",
    [theme.breakpoints.up(450)]: {
      paddingTop: "65%"
    },
    [theme.breakpoints.up(600)]: {
      paddingTop: "125%"
    }
  },
  gradient: {
    background:
      "linear-gradient(180deg, transparent 0%,transparent 80%,rgba(1,13,15,1) 100%)",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute"
  },
  content: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    color: "#ddd",
    textAlign: "center"
  },
  typo: {}
}));

const Collection = ({ col, image }: ISCProps) => {
  const classes = useStyles();
  const LinkRef = React.forwardRef<any, Omit<LinkProps, "to">>((props, ref) => {
    return <Link ref={ref} {...props} to={`/attractions/${col.id}`} />;
  });
  return (
    <Grid item xs={12} md={4} sm={4} key={col.id}>
      <Grow in={col.hasOwnProperty("place_ids")}>
        <Card className={classes.card}>
          <CardActionArea className={classes.action} component={LinkRef}>
            <CardMedia image={image} className={classes.media} />
            <div className={classes.gradient} />
          </CardActionArea>
          <CardContent className={classes.content}>
            <Typography variant="h6" className={classes.typo}>
              {col.name_long}
            </Typography>
          </CardContent>
        </Card>
      </Grow>
    </Grid>
  );
};

export default Collection;
