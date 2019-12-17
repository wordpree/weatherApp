import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import { NewsApiDataProvider } from "../util/apiCall";
import NewsLists from "../components/NewsLists";
import { makeStyles } from "@material-ui/styles";
import NewsDetail from "../components/NewsDetail";

const useStyes = makeStyles({
  news: { padding: "2rem 0", backgroundColor: "rgba(126, 199, 209,0.2)" }
});
const News = () => {
  const classes = useStyes();

  return (
    <NewsApiDataProvider>
      <Header />
      <Switch>
        <Route exact path="/news">
          <div className={classes.news}>
            <NewsLists />
          </div>
        </Route>
        <Route path="/news/:newsId" component={NewsDetail} />
      </Switch>
    </NewsApiDataProvider>
  );
};

export default News;
