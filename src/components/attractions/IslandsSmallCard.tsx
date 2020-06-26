import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  Fade,
  CardContent,
  makeStyles,
  CardHeader,
  CardActions,
  Avatar,
  useMediaQuery,
} from "@material-ui/core";
import { FrMotionButton } from "../";
import { ITriposoPoi } from "../../util/type";

interface IIProps {
  data: ITriposoPoi;
}

const useStyles = makeStyles((theme) => ({
  card: {
    marginRight: "2%",
    marginLeft: "2%",
    marginBottom: "1rem",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  cardHeader: {
    "& .MuiCardHeader-title": {
      borderBottom: "2.5px solid #FABE0E",
      display: "inline-block",
    },
  },
  media: {
    height: 0,
    paddingTop: "64.25%",
    [theme.breakpoints.up(600)]: {
      paddingTop: "56.25%",
    },
    [theme.breakpoints.up(768)]: {
      paddingTop: "100%",
    },
    [theme.breakpoints.up(960)]: {
      paddingTop: "120%",
    },
  },
  content: {
    color: "#707070",
  },
  actions: {
    justifyContent: "flex-end",
  },
  avatar: {
    background: "#028a8a",
    color: "#fff",
  },
}));

const IslandsCard = ({ data }: IIProps) => {
  const classes = useStyles();
  const md = useMediaQuery("(min-width:768px)");
  const image = data.images[0].sizes.medium.url.replace("http", "https");
  return (
    <Fade in={Boolean(data)}>
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          title={data.name}
          avatar={
            <Avatar className={classes.avatar}>
              {data.images[0].owner.substring(0, 1).toUpperCase()}
            </Avatar>
          }
        />
        <CardMedia image={image} className={classes.media} />
        <CardContent className={classes.content}>
          {md ? data.intro : data.intro.substring(0, 120) + "..."}
        </CardContent>
        <CardActions className={classes.actions}>
          <Link to={`/attractive-islands/${data.id}`}>
            <FrMotionButton color="primary" size="small">
              Explore More
            </FrMotionButton>
          </Link>
        </CardActions>
      </Card>
    </Fade>
  );
};
export default IslandsCard;
