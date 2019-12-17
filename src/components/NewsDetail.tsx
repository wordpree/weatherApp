import React from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Button
} from "@material-ui/core";
import defaultImg from "../assets/en-unsplash.jpg";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  title: {
    margin: "1rem auto 1rem auto",
    padding: "0.75rem"
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
    backgroundColor: "rgba(0,0,0,0.2)",
    padding: "0.35rem"
  },
  btn: {
    backgroundColor: "#EF2D56"
  },
  cont: {
    lineHeight: 1.75,
    padding: "0.75rem 0"
  }
});

const NewsDetail = (props: any) => {
  const classes = useStyles();
  const { newsId } = useParams();
  const { state } = useLocation();
  const img = state.urlToImage ? state.urlToImage : defaultImg;
  return (
    <Container style={{ margin: "2.5rem auto 1rem auto", padding: "1rem" }}>
      <Typography variant="h5" className={classes.title}>
        {state.title}
      </Typography>
      <Grid container spacing={8}>
        <Grid item xs={8}>
          <Card className={classes.card}>
            <Typography className={classes.des}>{state.description}</Typography>
            <CardMedia image={img} className={classes.media} />
            <CardContent></CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Typography className={classes.cont}>{state.content}</Typography>
          <Button
            variant="contained"
            classes={{ root: classes.btn }}
            href={state.url}
          >
            Read More
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewsDetail;
