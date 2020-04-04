import React from "react";
import { IZomatoCollection, ISygicCollection } from "../util/type";
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
  CardContent
} from "@material-ui/core";

interface ICProps {
  zCol?: IZomatoCollection;
  sCol?: ISygicCollection;
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
    media: {},
    content: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      color: "#ddd",
      textAlign: "center"
    },
    typo: {}
  });

const Collection = ({
  zCol,
  sCol,
  image,
  bpNumber,
  classes,
  path
}: ICProps) => {
  const id = zCol ? zCol.collection.collection_id : sCol ? sCol.id : undefined;
  const title = zCol
    ? zCol.collection.title
    : sCol
    ? sCol.name_long
    : undefined;
  const zDescription = zCol ? zCol.collection.description : undefined;
  // const classes = useStyles();

  const LinkRef = React.forwardRef<any, Omit<LinkProps, "to">>((props, ref) => {
    return <Link ref={ref} {...props} to={`/${path}/${id}`} />;
  });
  return (
    <Grid item xs={12} sm={bpNumber} key={id}>
      <Grow
        in={
          (sCol && sCol.hasOwnProperty("place_ids")) ||
          (zCol && zCol.hasOwnProperty("collection"))
        }
      >
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
            <Typography variant="h6" className={classes.typo}>
              {title}
            </Typography>
            {zDescription && (
              <Typography variant="body2" className={classes.typo}>
                {zDescription}
              </Typography>
            )}
          </CardContent>
        </Card>
      </Grow>
    </Grid>
  );
};

export default withStyles(collectionStyles)(Collection);
