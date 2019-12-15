import React from "react";
import { useNewsContextValue } from "../util/apiCall";
import Loading from "./Loading";
import NewsCard from "./NewsCard";
import { Grid, Container } from "@material-ui/core";
const NewsLists = () => {
  const value = useNewsContextValue();
  const { loading, articles } = value;

  return loading ? (
    <Loading value={100} />
  ) : (
    <Container>
      <Grid container spacing={4} justify="center">
        {articles &&
          articles.map(item => <NewsCard {...item} key={item.title} />)}
      </Grid>
    </Container>
  );
};

export default NewsLists;
