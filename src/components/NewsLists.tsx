import React, { useState, useEffect } from "react";
import { useNewsContextValue } from "../util/apiCall";
import Loading from "./Loading";
import NewsCard from "./NewsCard";
import { Grid, Container } from "@material-ui/core";
import { CSSTransition } from "react-transition-group";
import Pagination from "./Pagination";
import "animate.css";

interface INlProps {
  cardNum: number;
}

const NewsLists = ({ cardNum }: INlProps) => {
  const ITEM_LMT = 12;
  const value = useNewsContextValue();
  const { loading, articles } = value;
  const [start, setStart] = useState(false);
  const [pageNav, setPageNav] = useState({
    currentPage: 1,
    items: articles
  });
  const classNames = {
    enter: "animated",
    enterActive: "fadeIn"
  };

  const handlePageChage = (currentPage: number) => {
    setPageNav({
      items: articles.slice(
        (currentPage - 1) * ITEM_LMT,
        currentPage * ITEM_LMT
      ),
      currentPage
    });
    setStart(true);
  };

  useEffect(() => {
    if (!loading) {
      setPageNav({
        currentPage: 1,
        items: articles.slice(0, ITEM_LMT)
      });
    }
  }, [loading, articles]);

  return loading ? (
    <Loading value={100} />
  ) : (
    <>
      <Container>
        <CSSTransition
          in={start}
          timeout={400}
          classNames={classNames}
          onEntered={() => setStart(false)}
        >
          <Grid container spacing={4} justify="center">
            {pageNav.items.map(item => (
              <NewsCard {...item} key={item.title} />
            ))}
          </Grid>
        </CSSTransition>
      </Container>
      <Container>
        <Pagination
          currentPage={pageNav.currentPage}
          totalPage={Math.ceil(articles.length / ITEM_LMT)}
          itemLimit={ITEM_LMT}
          pageChange={handlePageChage}
        />
      </Container>
    </>
  );
};

export default NewsLists;
