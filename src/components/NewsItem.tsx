import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { K } from "../util/apiCall";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Button,
  Divider,
  Box
} from "@material-ui/core";
import { ArrowLeft, ArrowRight } from "mdi-material-ui";
import { Omit } from "@material-ui/types";
import defaultImg from "../assets/en-unsplash.jpg";
import { makeStyles, Theme } from "@material-ui/core/styles";

interface INiProps {
  articles: Array<K>;
  currentId: string | undefined;
}

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    margin: "1rem auto 1rem auto",
    padding: "0.75rem",
    fontWeight: 500
  },
  card: {
    margin: "0 auto",
    position: "relative"
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  des: {
    position: "absolute",
    left: "2%",
    bottom: "25%",
    maxWidth: "42%",
    color: "#fff",
    backgroundColor: "rgba(0,0,0,0.45)",
    padding: "0.15rem",
    fontSize: "0.95em",
    [theme.breakpoints.down("md")]: { padding: 0 }
  },
  btn: {
    marginTop: "1rem"
  },
  cont: {
    lineHeight: 1.75,
    padding: "0.75rem 0"
  },
  box: {
    padding: "0.5rem 0 0.75rem 0"
  },
  source: {
    fontWeight: "bold",
    fontSize: "1.1em"
  },
  date: {
    fontSize: "0.85em",
    color: "grey"
  },
  boxBack: {
    margin: "2rem auto 0 auto",
    padding: "1.5rem 0"
  }
}));

const NewsItem = ({ articles, currentId }: INiProps) => {
  console.log(articles);
  const classes = useStyles();
  const currentIndex = articles.findIndex(article => article.id === currentId);
  console.log(currentIndex);
  const currentItem = articles.find(article => article.id === currentId) as K;
  console.log(currentItem);
  const {
    title,
    url,
    description,
    content,
    urlToImage,
    author,
    publishedAt,
    source
  } = currentItem;
  const relAuthor = author ? author : "unknown";
  const img = urlToImage ? urlToImage : defaultImg;
  const deShort =
    description.length > 115
      ? description.substring(0, 115) + "..."
      : description;

  //   const prevId = articles[currentIndex - 1].id;
  //   const nextId = articles[currentIndex + 1].id;
  const backToNews = React.forwardRef<any, Omit<LinkProps, "to">>(
    (props, ref) => <Link to={`/news`} ref={ref} {...props}></Link>
  );
  //   const nextFarword = React.forwardRef<any, Omit<LinkProps, "to">>(
  //     (props, ref) => <Link to={`/news/${nextId}`} ref={ref} {...props}></Link>
  //   );

  return (
    <Container style={{ margin: "2.5rem auto 1rem auto", padding: "1rem" }}>
      <Typography variant="h5" className={classes.title}>
        {title}
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Card className={classes.card}>
            <Typography className={classes.des}>{deShort}</Typography>
            <CardMedia image={img} className={classes.media} />
            <CardContent></CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5} style={{ position: "relative" }}>
          <Typography className={classes.cont}>
            {content || description}
          </Typography>
          <Divider />
          <Box className={classes.box}>
            <Typography className={classes.source}>{`${relAuthor} | ${
              source.name ? source.name : "unknown"
            }`}</Typography>
            <Typography className={classes.date}>
              {new Date(publishedAt).toString()}{" "}
            </Typography>
          </Box>
          <Button
            className={classes.btn}
            variant="contained"
            href={url}
            color="secondary"
          >
            Read More
          </Button>
          <Box className={classes.boxBack}>
            <Button
              component={backToNews}
              variant="contained"
              size="small"
              startIcon={<ArrowLeft />}
              color="primary"
            >
              back
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewsItem;
