import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { ISygicPlace } from "../../util/type";
import { Omit } from "@material-ui/types";
import { MapMarker, ClockOutline } from "mdi-material-ui";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles({
  cardAct: {
    transition: "transform 0.5s ease-in-out 0.1s",
    "&:hover": {
      transform: "scale(1.05)"
    }
  },
  media: {
    paddingTop: "75%"
  },
  cardCont: {
    letterSpacing: 1,
    "&>*": {
      padding: "2px 1px",
      margin: "2px 1px"
    },
    "&>p": {
      fontWeight: 300,
      letterSpacing: 0.65
    }
  },
  typo: {
    display: "flex",
    alignItems: "center",
    "& > *": {
      marginRight: "0.5rem"
    }
  }
});

interface ISCProps1 {
  id: string;
  imgUrl: string;
  address: string;
  name: string;
  perex: string;
  dTFmt: string;
}

interface ISCProps {
  place: ISygicPlace;
}

function SygicPlaces({ place }: ISCProps) {
  const classes = useStyles();
  const dashId = place.id.replace(":", "-");
  const LinkForward = React.forwardRef<any, Omit<LinkProps, "to">>(
    (props, ref) => (
      <Link
        to={{ pathname: `/attraction/${dashId}`, state: place }}
        ref={ref}
        {...props}
      />
    )
  );
  const durationTime = place.duration_estimate;
  const dTFmt =
    durationTime < 3600
      ? durationTime / 60 + " mins"
      : durationTime >= 7200
      ? durationTime / 3600 + " hours"
      : durationTime / 3600 + " hour";
  const imgUrl = place.main_media.media[0].url_template.replace(
    "{size}",
    "600x450"
  );
  const brief =
    place.perex.length > 20 ? place.perex.substring(20) + "..." : place.perex;
  return (
    <>
      <Card>
        <CardActionArea className={classes.cardAct}>
          <CardMedia
            image={imgUrl}
            className={classes.media}
            component={LinkForward}
          />
        </CardActionArea>
      </Card>
      <CardContent className={classes.cardCont}>
        <Typography
          variant="caption"
          color="textSecondary"
          className={classes.typo}
        >
          <MapMarker style={{ fontSize: "1rem" }} />
          <span>{place.address}</span>
        </Typography>
        <Typography variant="h6">{place.name}</Typography>
        <Typography variant="body1">{brief}</Typography>
        <Typography variant="body2" className={classes.typo}>
          <ClockOutline style={{ fontSize: "1rem" }} />
          <span>Duration: {dTFmt}</span>
        </Typography>
      </CardContent>
    </>
  );
}

export default SygicPlaces;
