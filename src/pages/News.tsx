import React from "react";
import Header from "../components/header/Header";
import NewsLists from "../components/NewsLists";
import { makeStyles } from "@material-ui/styles";

const useStyes = makeStyles({
  news: {
    padding: "2rem 0",
  },
});
const News = () => {
  const classes = useStyes();
  return (
    <>
      <Header />
      <div className={classes.news}>
        <NewsLists />
      </div>
    </>
  );
};

export default News;
