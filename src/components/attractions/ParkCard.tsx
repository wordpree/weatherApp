import React from "react";
import {
  Card,
  CardMedia,
  Fade,
  CardContent,
  makeStyles,
  CardActions,
  Button,
  Typography,
} from "@material-ui/core";
import { ITriposoPoi } from "../../util/type";
import { ChevronRight } from "mdi-material-ui";

interface IPCProps {
  data: ITriposoPoi;
}

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: "1rem",
    "&:last-child": {
      marginBottom: 0,
    },
    [theme.breakpoints.up(500)]: {
      display: "flex",
    },
  },
  media: {
    [theme.breakpoints.down(500)]: {
      height: 0,
      paddingTop: "64.25%",
    },
    [theme.breakpoints.up(500)]: {
      flex: "1 0 40%",
    },
    [theme.breakpoints.up(600)]: {
      flexBasis: "35%",
    },
    [theme.breakpoints.up(768)]: {
      flexBasis: "30%",
    },
  },
  contenWrapper: {
    justifyContent: "space-around",
    [theme.breakpoints.up(500)]: {
      flex: "1 0 60%",
      display: "flex",
      flexDirection: "column",
    },
    [theme.breakpoints.up(600)]: {
      flexBasis: "65%",
    },
    [theme.breakpoints.up(768)]: {
      flexBasis: "70%",
    },
  },
  content: {
    [theme.breakpoints.between(768, 1280)]: {
      maxWidth: "78%",
    },
    "&>h5": {
      color: "#028a8a",
    },
  },

  rate: {
    backgroundColor: "#FABE0E",
    color: "#fff",
    display: "inline-block",
    marginTop: "0.2rem",
    padding: "0.1rem",
  },
  actions: {
    justifyContent: "flex-end",
    [theme.breakpoints.up(500)]: {
      justifyContent: "flex-start",
    },
    "&>button": {
      textTransform: "none",
    },
  },
}));

const ParkCard = ({ data }: IPCProps) => {
  const classes = useStyles();
  const snippet = data.snippet;
  return (
    <Fade in={Boolean(data)}>
      <Card className={classes.card}>
        <CardMedia
          image={data.images[0].sizes.medium.url}
          className={classes.media}
        />
        <div className={classes.contenWrapper}>
          <CardContent className={classes.content}>
            <Typography variant="h5">{data.name}</Typography>
            <Typography variant="body1" color="textSecondary">
              {snippet.length > 132
                ? snippet.substring(0, 132) + "..."
                : snippet}
            </Typography>
            <Typography variant="caption" className={classes.rate}>
              <span>Rating:</span> {data.score.toFixed(2)}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button color="primary" size="small" endIcon={<ChevronRight />}>
              Explore more information
            </Button>
          </CardActions>
        </div>
      </Card>
    </Fade>
  );
};

export default ParkCard;
