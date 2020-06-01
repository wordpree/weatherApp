import React, { useState } from "react";
import {
  Card,
  CardMedia,
  Fade,
  CardContent,
  makeStyles,
  CardActions,
  Typography,
} from "@material-ui/core";
import { ITriposoPoi } from "../../util/type";
import ButtonMore from "./ButtomMore";
import DialogTour from "../city/DialogTour";

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
    padding: "0.2rem",
    marginTop: "0.25rem",
    marginBottom: "0.25rem",
  },
  price: {},
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
  const snippet = data.intro;
  const image = data.images.length
    ? data.images[0].sizes.medium.url.replace("http", "https")
    : data.imgTour; //insert pictures for tours
  const tourInfo = {
    title: data.name,
    content: data.content.sections[0].body,
    highlight: data.highlights,
    booking: data.vendor_tour_url,
  };
  const [open, setOpen] = useState(false); //dialog
  const handleDialogClick = (state: boolean) => setOpen(state);
  return (
    <Fade in={Boolean(data)}>
      <>
        <Card className={classes.card}>
          <CardMedia image={image} className={classes.media} />
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
              {data.price_is_per_person && (
                <Typography variant="body2" className={classes.price}>
                  <span>Price per person: </span>${data.converted_price.amount}{" "}
                  {data.converted_price.currency}
                </Typography>
              )}
            </CardContent>
            <CardActions className={classes.actions}>
              {data.hasOwnProperty("converted_price") ? (
                <ButtonMore click={handleDialogClick}>
                  Explore tour details
                </ButtonMore>
              ) : (
                <ButtonMore>Explore more information</ButtonMore>
              )}
            </CardActions>
          </div>
        </Card>
        <DialogTour {...tourInfo} open={open} click={handleDialogClick} />
      </>
    </Fade>
  );
};

export default ParkCard;
