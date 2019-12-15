import React from "react";
import Header from "../components/Header";
import { NewsApiDataProvider } from "../util/apiCall";
import NewsLists from "../components/NewsLists";
import { makeStyles } from "@material-ui/styles";

const useStyes = makeStyles({
  news: { margin: "2rem 0" }
});
export default function News() {
  const classes = useStyes();

  return (
    <NewsApiDataProvider>
      <Header />
      <div className={classes.news}>
        <NewsLists />
      </div>
    </NewsApiDataProvider>
  );
}
