import React from "react";
import {
  Grid,
  makeStyles,
  Card,
  CardMedia,
  Typography,
  useMediaQuery,
  CardContent,
  CardActionArea,
} from "@material-ui/core";
import { motion } from "framer-motion";
import { NewsProps } from "./index";
import { imgUrl, titleLmt, contentLmt, authorConfirm } from "../../util/utils";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    alignItems: "center",
    minHeight: 80,
  },
  card: {
    cursor: "pointer",
  },
  media: {
    paddingTop: "56.75%",
    [theme.breakpoints.up("md")]: {
      paddingTop: "56.75%",
    },
  },
  cardContent: {
    padding: "0 !important",
  },
  container: {
    padding: "1rem 0.75rem",
  },
  content: {
    textAlign: "left",
  },
  meta: {
    background: "rgb(234,175,4)",
    color: "#fff",
    fontWeight: 400,
    padding: "0.5em",
    textAlign: "center",
  },

  textPrimary: {
    textDecoration: "none",
    color: "inherit",
    fontWeight: "bold",
    "&:hover": {
      textDecoration: "underline",
      textDecorationColor: "#FFCC0E",
    },
    letterSpacing: 1,
  },
  credit: {
    textAlign: "right",
    color: "rgba(0,0,0,0.45)",
  },
}));

const NewsPartThree = ({ news }: NewsProps) => {
  const classes = useStyles();
  const smQuery = useMediaQuery("(max-width:400px)");
  const mdQuery = useMediaQuery("(max-width:959px)");
  const metaVariants = {
    hover: {
      y: -50,
      transition: {
        stiffness: 100,
        type: "spring",
        duration: 0.2,
      },
    },
    tap: {
      y: 0,
    },
  };
  const forwardToMotion = React.forwardRef<any, any>((props, ref) => (
    <motion.div {...props} ref={ref} variants={metaVariants} />
  ));
  const TITLE_LENGTH = 75;
  return (
    <Grid container spacing={3} style={{ margin: "2rem 0" }}>
      {news.map((item, key) => (
        <Grid key={key} item xs={12} md={6} lg={4}>
          <motion.div whileHover="hover" whileTap="tap">
            <div className={classes.title}>
              <Typography variant="subtitle1">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.textPrimary}
                >
                  {titleLmt(item.title, TITLE_LENGTH, mdQuery)}
                </a>
              </Typography>
            </div>
            <Card className={classes.card}>
              <CardActionArea
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardMedia
                  image={imgUrl(item.urlToImage)}
                  className={classes.media}
                />
              </CardActionArea>
              <CardContent className={classes.cardContent}>
                <Typography
                  variant="caption"
                  className={classes.meta}
                  component={forwardToMotion}
                >
                  By {authorConfirm(item.author)} Published At{" "}
                  {new Date(item.publishedAt).toDateString()}
                </Typography>
              </CardContent>
            </Card>
            <div className={classes.container}>
              <Typography
                variant="body2"
                component="p"
                color="textSecondary"
                className={classes.content}
              >
                {contentLmt(item.content, smQuery, 60, 270)}
              </Typography>
            </div>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
};

export default NewsPartThree;
