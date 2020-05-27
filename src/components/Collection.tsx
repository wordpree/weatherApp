import React from "react";
import { IZomatoCollection } from "../util/type";
import { Link, LinkProps } from "react-router-dom";
import { Omit } from "@material-ui/types";
import {
  withStyles,
  createStyles,
  Card,
  CardActionArea,
  Grid,
  CardMedia,
  Typography,
  Grow,
  CardContent,
} from "@material-ui/core";

interface ICProps {
  zCol?: IZomatoCollection;
  image: string;
  bpNumber: any;
  classes?: any;
  path: string;
}

const collectionStyles = () =>
  createStyles({
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
    },
    media: {},
    content: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      color: "#ddd",
      textAlign: "center",
    },
    typoH6: { fontWeight: "bold" },
    typoB2: { letterSpacing: 1 },
  });

const Collection = ({ zCol, image, bpNumber, classes, path }: ICProps) => {
  const id = zCol && zCol.collection.collection_id;
  const title = zCol && zCol.collection.title;
  const description = zCol && zCol.collection.description;

  const LinkRef = React.forwardRef<any, Omit<LinkProps, "to">>((props, ref) => {
    return <Link ref={ref} {...props} to={`/${path}/${id}`} />;
  });
  return (
    <Grid item xs={12} sm={bpNumber} key={id}>
      <Grow>
        <Card className={classes.card}>
          <CardActionArea className={classes.action} component={LinkRef}>
            <CardMedia
              image={image}
              className={`${classes.media}`}
              classes={{ media: classes.newMedia }}
            />
            <div className={classes.gradient} />
          </CardActionArea>
          <CardContent className={classes.content}>
            <Typography variant="h6" className={classes.typoH6}>
              {title}
            </Typography>
            <Typography variant="body2" className={classes.typoB2}>
              {description}
            </Typography>
          </CardContent>
        </Card>
      </Grow>
    </Grid>
  );
};

export default withStyles(collectionStyles)(Collection);
