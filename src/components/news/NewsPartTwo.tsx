import React from "react";
import { NewsProps, CONTENT_LENGTH_LG, CONTENT_LENGTH_SM } from "./index";
import {
  Grid,
  makeStyles,
  Card,
  Avatar,
  CardActionArea,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { motion } from "framer-motion";
import { imgUrl, titleLmt, contentLmt, authorConfirm } from "../../util/utils";

const useStyles = makeStyles((theme) => ({
  card: {
    position: "relative",
  },
  header: {
    borderBottom: "2px inset rgb(234,175,4) ",
  },
  avatar: {
    background: "#028a8a",
  },
  media: {
    paddingTop: "56.75%",
    [theme.breakpoints.up("md")]: {
      paddingTop: "115%",
    },
  },
}));

const NewsPartTwo = ({ news }: NewsProps) => {
  const classes = useStyles();
  const smQuery = useMediaQuery("(max-width:400px)");
  const mdQuery = useMediaQuery("(max-width:959px)");
  const TITLE_LENGTH = 45;

  return (
    <Grid container spacing={2} style={{ margin: "2rem 0" }}>
      {news.map((item, key) => {
        const avatarLetter = authorConfirm(item.author)
          .substring(0, 1)
          .toUpperCase();
        return (
          <Grid key={key} item xs={12} md={6} lg={3}>
            <motion.div
              whileHover={{
                boxShadow: "0 0 12px rgba(0,0,0,0.25)",
                scale: 1.01,
              }}
            >
              <Card className={classes.card}>
                <CardHeader
                  className={classes.header}
                  avatar={
                    <Avatar aria-label="author" className={classes.avatar}>
                      {avatarLetter}
                    </Avatar>
                  }
                  title={titleLmt(item.title, TITLE_LENGTH, mdQuery)}
                  subheader={new Date(item.publishedAt).toDateString()}
                  titleTypographyProps={{ variant: "body2" }}
                  subheaderTypographyProps={{ variant: "caption" }}
                />
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
                <CardContent>
                  <Typography
                    variant="body2"
                    component="p"
                    color="textSecondary"
                  >
                    {contentLmt(
                      item.content,
                      smQuery,
                      CONTENT_LENGTH_SM,
                      CONTENT_LENGTH_LG
                    )}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default NewsPartTwo;
