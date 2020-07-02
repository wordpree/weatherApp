import React, { useState } from "react";
import { forwardRefToLink } from "../../util/utils";
import {
  Card,
  CardMedia,
  Fade,
  CardContent,
  makeStyles,
  CardActions,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { motion } from "framer-motion";
import { ITriposoPoi } from "../../util/type";
import ButtonMore from "./MoreDetailButton";
import DialogTour from "../city/DialogTour";

interface IPCProps {
  data: ITriposoPoi;
}

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    marginBottom: "1rem",
    "&:last-child": {
      marginBottom: 0,
    },
  },
  card: {
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
  const upFromSm = useMediaQuery("(min-width:500px)");
  const boxShadowX = upFromSm ? "3px" : 0;
  const getId = (data: ITriposoPoi) => data.id;
  const LinkMoreInfo = forwardRefToLink(`/national-park/${getId(data)}`);

  const getImg = (data: ITriposoPoi) =>
    data.images.length
      ? data.images[0].sizes.medium.url.replace("http", "https")
      : data.imgTour; //insert pictures for tours
  const getTourInfo = (data: ITriposoPoi) => {
    const { name, content, highlights, vendor_tour_url } = data;
    return {
      title: name,
      content: content.sections[0].body,
      highlight: highlights,
      booking: vendor_tour_url,
    };
  };
  const getTourStatus = (data: ITriposoPoi) =>
    data.hasOwnProperty("converted_price");
  const image = getImg(data);
  const tourInfo = getTourInfo(data);
  const [open, setOpen] = useState(false); //dialog for tour
  const tour = getTourStatus(data);
  const handleDialogClick = (isTour: boolean) => (state: boolean) => {
    if (isTour) {
      setOpen(state);
    }
  };

  return (
    <Fade in={Boolean(data)}>
      <>
        <motion.div
          className={classes.cardWrapper}
          whileHover={{
            boxShadow: `${boxShadowX}  0 0 #028a8a ,0 3px 6px rgba(0,0,0,0.15)`,
          }}
          transition={{ type: "spring", stiffness: 240 }}
        >
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
                    <span>Price per person: </span>$
                    {data.converted_price.amount}{" "}
                    {data.converted_price.currency}
                  </Typography>
                )}
              </CardContent>
              <CardActions className={classes.actions}>
                {data.hasOwnProperty("converted_price") ? (
                  <ButtonMore click={handleDialogClick(tour)}>
                    Explore tour details
                  </ButtonMore>
                ) : (
                  <ButtonMore link={LinkMoreInfo}>
                    Explore more information
                  </ButtonMore>
                )}
              </CardActions>
            </div>
          </Card>
        </motion.div>
        <DialogTour {...tourInfo} open={open} click={handleDialogClick(tour)} />
      </>
    </Fade>
  );
};

export default ParkCard;
