import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { ISygicPlace } from "../../util/type";
import { Omit } from "@material-ui/types";
import { MapMarker } from "mdi-material-ui";
import { StyledCardH } from "./styled";
import {
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles({
  cardAct: {
    flex: "0 1 0%",
    transition: "transform 0.5s ease-in-out 0.1s",
    "&:hover": {
      transform: "scale(1.05)"
    }
  },
  media: {
    minWidth: 296,
    paddingTop: "63%"
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

interface ISCProps {
  places: ISygicPlace;
}

function SygicHotels({ places }: ISCProps) {
  const classes = useStyles();
  const dashId = places.id.replace(":", "-");
  const LinkForward = React.forwardRef<any, Omit<LinkProps, "to">>(
    (props, ref) => (
      <Link
        to={{ pathname: `/attraction/${dashId}`, state: places }}
        ref={ref}
        {...props}
      />
    )
  );

  const imgUrl = places.main_media.media[0].url_template.replace(
    "{size}",
    "600x378"
  );

  return (
    <StyledCardH>
      <CardActionArea className={classes.cardAct}>
        <CardMedia
          image={imgUrl}
          className={classes.media}
          component={LinkForward}
        />
      </CardActionArea>
      <CardContent className={classes.cardCont}>
        <Typography
          variant="caption"
          color="textSecondary"
          className={classes.typo}
        >
          <MapMarker style={{ fontSize: "1rem" }} />
          <span>{places.address}</span>
        </Typography>
        <Typography variant="h6">{places.name}</Typography>
        <Typography variant="body1">{places.perex}</Typography>
      </CardContent>
    </StyledCardH>
  );
}

export default SygicHotels;
