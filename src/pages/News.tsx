import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { NewsApiDataProvider } from "../util/apiCall";
import NewsLists from "../components/NewsLists";
import { makeStyles } from "@material-ui/styles";
import NewsDetail from "../components/NewsDetail";

const useStyes = makeStyles({
  news: {
    padding: "2rem 0",
    background: "linear-gradient(180deg ,#8EBCBF 0%, #C1E4EB 100% )"
  }
});
const News = () => {
  const classes = useStyes();
  const id = useLocation().state;
  const cardNum = id && id.split("-")[2];

  return (
    <NewsApiDataProvider city="brisbane">
      <Header />
      <Switch>
        <Route exact path="/news">
          <div className={classes.news}>
            <NewsLists cardNum={cardNum} />
          </div>
        </Route>
        <Route path="/news/:newsId" component={NewsDetail} />
      </Switch>
    </NewsApiDataProvider>
  );
};

export default News;
