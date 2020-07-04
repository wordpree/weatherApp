import React from "react";
import {
  Grid,
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Divider,
  useMediaQuery,
} from "@material-ui/core";
import { motion } from "framer-motion";
import { AlarmPlus, Account } from "mdi-material-ui";
import { imgUrl, titleLmt, contentLmt, authorConfirm } from "../../util/utils";
import {
  NewsProps,
  CONTENT_LENGTH_LG,
  CONTENT_LENGTH_SM,
  TITLE_LENGTH,
} from "./index";

const useStyles = makeStyles((theme) => ({
  grid: {
    "&>div": {
      marginBottom: "1.75em",
      padding: "0.75em 0.25em",
    },
  },
  entry: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  entryRev: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row-reverse",
    },
  },
  content: {
    padding: "0.45em 0.2em",
    textAlign: "center",
  },
  cardMedia: {
    paddingTop: "63.5%",
    width: "100%",
  },
  card: {
    [theme.breakpoints.up("md")]: {
      width: "50%",
      flex: "1 0 auto",
    },
  },
  action: {
    position: "relative",
  },
  backdrop: {
    position: "absolute",
    left: 0,
    top: -500,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.4)",
    textAlign: "center",
    "&>p": {
      fontSize: "2rem",
    },
  },
  metaIcon: {
    display: "inline-flex",
    alignItems: "center",
    "&>*": {
      marginRight: "0.25em",
      display: "inline-flex",
      alignItems: "center",
    },
  },
  meta: {
    color: "#fff",
    "&>span": {
      padding: "0.25em",
      marginRight: "0.875em",
      marginBottom: "0.25em",
      backgroundColor: "#028a8a",
      color: "#fff",
      fontWeight: 500,
      borderRadius: 5,
    },
    marginTop: "1rem",
    fontSize: "0.875em",
    display: "inline-block",
  },
  contentWrapper: {
    padding: "0.45em 0.75em",
    textAlign: "center",
  },
}));

const LeftPart = ({ news }: NewsProps) => {
  const classes = useStyles();
  const smQuery = useMediaQuery("(max-width:500px)");
  const mdQuery = useMediaQuery("(max-width:959px)");
  const emojis = ["😄", "😆", "😊", "🤩", "😛"];
  const backdropVariants = {
    hover: {
      y: 500,
    },
  };
  const getEmoji = (emojis: string[], index: number) => emojis[index];

  return (
    <Grid item xs={12} lg={7} className={classes.grid}>
      {news.slice(0, 5).map((item, key) => (
        <React.Fragment key={key}>
          <motion.div
            className={key % 2 === 0 ? classes.entry : classes.entryRev}
            whileHover="hover"
          >
            <Card variant="outlined" className={classes.card}>
              <CardActionArea
                className={classes.action}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  className={classes.backdrop}
                  variants={backdropVariants}
                >
                  <p>{getEmoji(emojis, key)}</p>
                </motion.div>
                <CardMedia
                  image={imgUrl(item.urlToImage)}
                  className={classes.cardMedia}
                />
              </CardActionArea>
            </Card>
            <div className={classes.contentWrapper}>
              <Typography variant="h6">
                {titleLmt(item.title, TITLE_LENGTH, mdQuery)}
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.content}
              >
                {contentLmt(
                  item.content,
                  smQuery,
                  CONTENT_LENGTH_SM,
                  CONTENT_LENGTH_LG
                )}
              </Typography>
              <div className={classes.meta}>
                <span className={classes.metaIcon}>
                  <AlarmPlus fontSize="inherit" />
                  <span>{new Date(item.publishedAt).toDateString()}</span>
                </span>
                <span className={classes.metaIcon}>
                  <Account fontSize="inherit" />
                  <span>{authorConfirm(item.author)}</span>
                </span>
              </div>
            </div>
          </motion.div>
          <Divider />
        </React.Fragment>
      ))}
    </Grid>
  );
};
export default LeftPart;
