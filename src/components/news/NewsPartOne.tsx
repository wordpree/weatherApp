import React from "react";
import { motion } from "framer-motion";
import {
  Grid,
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { imgUrl, authorConfirm, contentLmt } from "../../util/utils";
import { NewsProps, CONTENT_LENGTH_LG, CONTENT_LENGTH_SM } from "./index";

const useStyles = makeStyles((theme) => ({
  action: {
    position: "relative",
  },
  backdrop: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(180deg,rgba(0,0,0,0.2) 0,rgba(0,0,0,0.65) 50%,rgba(0,0,0,0.2) 100%)",
  },
  meta: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    color: "#fff",
    letterSpacing: 1.1,
    textAlign: "center",
    width: "100%",
  },
  media: {
    height: 0,
    paddingTop: "80.25%",
    [theme.breakpoints.up(500)]: {
      paddingTop: "56.25%",
    },
    position: "relative",
  },
  typo: {
    marginBottom: "0.5em",
    color: "#FFCC0E",
    padding: "0.1em 0.25em",
    fontWeight: 500,
  },
  subTitle: {
    fontWeight: "bold",
  },
}));

const NewsPartOne = ({ news }: NewsProps) => {
  const query = useMediaQuery("(max-width:500px)");
  const classes = useStyles();
  const imgVariants = {
    hover: {
      scale: 1.03,
      transition: {
        stiffness: 200,
        type: "spring",
      },
    },
    tap: {
      scale: 1,
    },
  };
  const forwardToMotion = React.forwardRef<any, any>((props, ref) => (
    <motion.div
      {...props}
      ref={ref}
      variants={imgVariants}
      whileHover="hover"
      whileTap="tap"
    />
  ));
  return (
    <Grid container spacing={1} style={{ margin: "2rem 0" }}>
      {news.map((item, key) => (
        <Grid item xs={12} md={6} key={key}>
          <Card>
            <CardActionArea
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.action}
            >
              <CardMedia
                component={forwardToMotion}
                image={imgUrl(item.urlToImage)}
                className={classes.media}
              >
                <div className={classes.backdrop} />
              </CardMedia>
              <CardContent className={classes.meta}>
                <Typography variant="subtitle1" className={classes.subTitle}>
                  {item.title}
                </Typography>
                <Typography variant="caption" className={classes.typo}>
                  By {authorConfirm(item.author)} on{" "}
                  {new Date(item.publishedAt).toLocaleDateString()}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardContent>
              <Typography variant="body2" component="p" color="textSecondary">
                {contentLmt(
                  item.content,
                  query,
                  CONTENT_LENGTH_SM,
                  CONTENT_LENGTH_LG
                )}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default NewsPartOne;
