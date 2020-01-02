import React from "react";
import { useParams } from "react-router-dom";
import { useNewsContextValue } from "../util/apiCall";
import Loading from "./Loading";
import NewsItem from "./NewsItem";

const NewsDetail = () => {
  const { newsId } = useParams();
  const value = useNewsContextValue();

  const { articles, loading } = value;

  return loading ? (
    <Loading value={100} />
  ) : (
    <NewsItem articles={articles} currentId={newsId} />
  );
};
export default NewsDetail;
