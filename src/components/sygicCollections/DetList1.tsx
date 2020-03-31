import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  makeStyles,
  CardContent,
  Typography,
  Button,
  Fade
} from "@material-ui/core";
import { ISygicPlace } from "../../util/type";
interface ISCLProps {
  place: ISygicPlace;
}

const useStyles = makeStyles(theme => ({
  card: {
    position: "relative"
  },
  media: {
    paddingTop: "130%",
    [theme.breakpoints.up(500)]: {
      paddingTop: "80%"
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: "50%"
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "35%"
    },
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  content: {
    textAlign: "center",
    color: "#ddd",
    letterSpacing: 1.5,
    position: "absolute",
    padding: "2%",
    bottom: 0,
    left: "50%",
    width: "100%",
    transform: "translateX(-50%)",
    backgroundImage:
      "linear-gradient( to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,0.3) 30%,rgba(0,0,0,0.68) 100% )"
  },
  typo: {
    fontWeight: "bold"
  },
  btn: {
    transition: "all 0.4s ease-in-out",
    margin: "1rem  0 auto",
    color: "#ddd",
    borderColor: "#fff",
    "&:hover": {
      background: "#00535e",
      color: "#ddd",
      borderColor: "#00535e"
    }
  }
}));

const DetList1 = ({ place }: ISCLProps) => {
  const classes = useStyles();
  if (!place.id) return <div />;

  const img = place.main_media.media[0].url_template.replace(
    "{size}",
    "1200x600"
  );

  return (
    <Fade in={Boolean(place.id)}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia image={img} className={classes.media} />
        </CardActionArea>
        <CardContent className={classes.content}>
          <Typography variant="h4" className={classes.typo}>
            {place.name}
          </Typography>
          <Typography variant="body1" className={classes.typo}>
            {place.perex}
          </Typography>
          <Button variant="outlined" className={classes.btn}>
            Learn more
          </Button>
        </CardContent>
      </Card>
    </Fade>
  );
};

export default DetList1;
