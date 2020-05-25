import React from "react";
import { ITriposoPoi } from "../../util/type";
import ParkCard from "./ParkCard";
import {
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Card,
  makeStyles,
  Button,
  Fade,
} from "@material-ui/core";
import { ChevronRight } from "mdi-material-ui";
import { parkCardLists } from "./Parks";

interface IMProps {
  data: ITriposoPoi[];
  more: boolean;
}

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
  },
  card: {
    height: "100%",
  },
  left: {
    flex: "1 0 49%",
    marginRight: "1%",
  },
  media: {
    paddingTop: "56.25%",
    height: 0,
  },
  right: {
    display: "flex",
    flexDirection: "column",
  },
}));
const ParksMedium = ({ data, more }: IMProps) => {
  const classes = useStyles();
  const image = data[0].images[0].sizes.medium.url.replace("http", "https");

  return (
    <div>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Card className={classes.card}>
            <CardMedia image={image} className={classes.media} />
            <CardContent>
              <Typography variant="h5" color="primary">
                {data[0].name}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {data[0].content.sections[0].body.replace(/<(.*?)>/g, "")}
              </Typography>
            </CardContent>
            <CardActions>
              <Button color="primary" endIcon={<ChevronRight />}>
                Explore more infomation
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className={classes.right}>
          {parkCardLists(ParkCard)(data.slice(1, 4))}
        </div>
      </div>
      <Fade in={more}>
        <div
          style={{
            display: more ? "block" : "none",
            marginTop: more ? "1rem" : 0,
          }}
        >
          {more && parkCardLists(ParkCard)(data.slice(4))}
        </div>
      </Fade>
    </div>
  );
};

export default ParksMedium;
