import React from "react";
import {
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Card,
  makeStyles,
  Fade,
} from "@material-ui/core";
import { motion } from "framer-motion";
import { forwardRefToLink } from "../../util/utils";
import { ITriposoPoi } from "../../util/type";
import ParkCard from "./ParkCard";
import { parkCardLists } from "./Parks";
import ButtonMore from "./MoreDetailButton";

interface IMProps {
  data: ITriposoPoi[];
  more: boolean;
}

const useStyles = makeStyles({
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
});

const ParksMedium = ({ data, more }: IMProps) => {
  const classes = useStyles();
  const getImg = (data: ITriposoPoi[]) =>
    data[0].images[0].sizes.medium.url.replace("http", "https");
  const getId = (data: ITriposoPoi) => data.id;
  const LinkMoreInfo = forwardRefToLink(`/national-park/${getId(data[0])}`);
  const image = getImg(data);

  return (
    <div>
      <div className={classes.wrapper}>
        <motion.div
          className={classes.left}
          whileHover={{ boxShadow: "0 4px 4px rgba(0,0,0,0.25)" }}
        >
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
              <ButtonMore link={LinkMoreInfo}>
                Explore more infomation
              </ButtonMore>
            </CardActions>
          </Card>
        </motion.div>
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
