import React from "react";
import { K } from "../util/apiCall";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardHeader,
  Avatar
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import defaultImg from "../assets/en-unsplash.jpg";
const useStyles = makeStyles({
  card: {
    maxWidth: "80%",
    margin: "0 auto"
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    "&:hover": { transform: "scale(1.05)" },
    transition: "all 1s ease-in-out"
  },
  avatar: {
    backgroundColor: "#d17519",
    color: "white",
    width: 25,
    height: 25
  }
});
const NewsCard = (props: K) => {
  const classes = useStyles();
  const {
    title,
    description,
    content,
    url,
    urlToImage,
    author,
    publishedAt
  } = props;
  return (
    <Grid item xs={12} md={6} lg={4} xl={3}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            image={urlToImage ? urlToImage : defaultImg}
            title={title}
            className={classes.media}
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle2" component="h3">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardHeader
          avatar={
            <Avatar aria-label="author" className={classes.avatar}>
              A
            </Avatar>
          }
          title={`${author ? author : "unknown"}`}
          subheader={`${new Date(publishedAt).toDateString()}`}
        />
      </Card>
    </Grid>
  );
};

export default NewsCard;
