import React from "react";
import {
  Grid,
  makeStyles,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { ITriposoPoi } from "../../util/type";

interface IIMProps {
  data: ITriposoPoi;
}

const useStyles = makeStyles({
  container: {
    padding: "1rem",
  },
  cardLeft: {
    height: "100%",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  mediaLeft: {
    height: "100%",
  },
  cardRight: {
    padding: "1rem 8% 1.5rem",
  },
  content: {
    textAlign: "center",
    "&>h5": {
      lineHeight: 1.9,
      fontWeight: 400,
      borderBottom: "2.5px solid #FABE0E",
      display: "inline-block",
    },
    "&>p": {
      lineHeight: 1.6,
      letterSpacing: 1,
    },
  },
  medias: {
    display: "flex",
    padding: "1rem",
    "&>div:first-child": {
      marginRight: "1.25rem",
    },
    "&>div": {
      borderRadius: 15,
    },
  },
  media: {
    height: 0,
    paddingTop: "64%",
    flexGrow: 1,
  },
  actions: {
    justifyContent: "center",
    "&>*": {
      color: "#fff",
      margin: "1rem auto",
      borderRadius: 10,
    },
  },
});

const IslandsMedium = ({ data }: IIMProps) => {
  const classes = useStyles();
  const image = data.images[0].sizes.medium.url.replace("http", "https");
  const image1 = data.images[1].sizes.medium.url.replace("http", "https");
  const image2 = data.images[2].sizes.medium.url.replace("http", "https");

  return (
    <Grid container className={classes.container}>
      <Grid item xs={6}>
        <Card className={classes.cardLeft} raised>
          <CardMedia image={image} className={classes.mediaLeft} />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card className={classes.cardRight} square={true}>
          <CardContent className={classes.content}>
            <Typography variant="h5">{data.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              {data.snippet}
            </Typography>
          </CardContent>
          <div className={classes.medias}>
            <CardMedia className={classes.media} image={image1}></CardMedia>
            <CardMedia className={classes.media} image={image2}></CardMedia>
          </div>
          <CardActions className={classes.actions}>
            <Button variant="contained" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default IslandsMedium;
