import React from "react";
import Header from "../components/Header";
import { NewsProvider } from "../util/apiCall";
import NewsLists from "../components/NewsLists";
import { makeStyles } from "@material-ui/styles";

const useStyes = makeStyles({
  news: {
    padding: "2rem 0"
  }
});
const News = () => {
  const classes = useStyes();
  const query = localStorage.getItem("query");
  const item = query ? query : "Brisbane";

  return (
    <NewsProvider location={item}>
      <Header />
      <div className={classes.news}>
        <NewsLists />
      </div>
    </NewsProvider>
  );
};

export default News;
