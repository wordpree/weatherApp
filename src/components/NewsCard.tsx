import React from "react";
import { Link } from "react-router-dom";
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
    margin: "0 auto",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column"
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    "&:hover": { transform: "scale(1.05)" },
    transition: "all 1s ease-in-out"
  },
  avatar: {
    backgroundColor: "#EF2D56",
    color: "white",
    width: 25,
    height: 25
  }
});
const NewsCard = (props: K) => {
  const classes = useStyles();
  const {
    title,
    urlToImage,
    author,
    id,
    publishedAt,
    url,
    description,
    content
  } = props;
  const realAuthor = author ? author : "unknown";
  const avatar = realAuthor.slice(0, 1).toUpperCase();

  return (
    <Grid item xs={12} md={6} lg={4} xl={3}>
      <Card className={classes.card}>
        <Link
          to={{
            pathname: `/news/${id}`,
            state: { title, url, description, content, urlToImage, realAuthor }
          }}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <CardActionArea>
            <CardMedia
              image={urlToImage ? urlToImage : defaultImg}
              title={title}
              className={classes.media}
            />
            <CardContent>
              <Typography gutterBottom variant="caption" component="h4">
                {title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardHeader
          avatar={
            <Avatar aria-label="author" className={classes.avatar}>
              {avatar}
            </Avatar>
          }
          title={`${realAuthor}`}
          subheader={`${new Date(publishedAt).toDateString()}`}
        />
      </Card>
    </Grid>
  );
};

export default NewsCard;
