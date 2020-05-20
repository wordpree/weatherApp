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

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 0,
    paddingTop: "56.25%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  cardLeft: {
    height: "100%",
  },
  mediaLeft: {
    height: "100%",
  },
  cardRight: {
    padding: "1rem 8% 0",
  },
  content: {
    textAlign: "center",
    "&>h5": {
      lineHeight: 1.9,
      fontWeight: 300,
    },
  },
  medias: {
    display: "flex",
    "&>div:first-child": {
      marginRight: "1.25rem",
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
      margin: "0.5rem auto",
      borderRadius: 10,
    },
  },
}));

const IslandsMedium = ({ data }: IIMProps) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={6}>
        <Card className={classes.cardLeft}>
          <CardMedia
            image={data.images[0].sizes.medium.url}
            className={classes.mediaLeft}
          />
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
            <CardMedia
              className={classes.media}
              image={data.images[1].sizes.medium.url}
            ></CardMedia>
            <CardMedia
              className={classes.media}
              image={data.images[2].sizes.medium.url}
            ></CardMedia>
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
