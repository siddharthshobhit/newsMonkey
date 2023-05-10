import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import SampleResponse from "../SampleResponse.json";
import Spinner from "./Spinner";
import { PropTypes } from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  const state = {
    articles: [],
    page: 1,
    loading: true,
    totalResults: 0,
  };

  const capitalize = (str) => {
    return str?.charAt(0)?.toUpperCase() + str?.slice(1);
  };

  document.title = capitalize(props.category);
  // 1;

  useEffect(() => {
    setLoading(true);
    getNews();
  }, []);

  const getNews = async () => {
    console.log("Method called");
    props.setProgress(10);
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    );
    setLoading(true);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    if (totalResults != articles?.length) {
      // setState({ page: state.page + 1 });
      console.log("page", page);
      setPage(page + 1);
      const data = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
      );
      setLoading(true);
      let parsedData = await data.json();
      setLoading(false);
      setArticles(articles.concat(parsedData.articles));
      // setState({
      //   loading: false,
      //   articles: state.articles.concat(parsedData.articles),
      // });
    }
  };

  return (
    <div className="container">
      <h2>Top Headlines: {capitalize(props?.category)}</h2>
      <InfiniteScroll
        dataLength={articles}
        next={fetchMoreData}
        hasMore={totalResults != articles?.length}
        loader={<Spinner />}
      >
        <div className="row my-2">
          {articles?.map((resp, index) => {
            return (
              <div className="col-md-4 my-2">
                <NewsItem
                  key={resp.description}
                  title={resp.title}
                  description={resp.description}
                  urlToImage={resp.urlToImage}
                  url={resp.url}
                  author={resp.author}
                  publishedAt={resp.publishedAt}
                  source={resp.source}
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "genrral",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  categoryL: PropTypes.string,
};
export default News;
