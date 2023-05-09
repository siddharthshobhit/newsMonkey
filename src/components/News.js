import React, { Component } from "react";
import NewsItem from "./NewsItem";
import SampleResponse from "../SampleResponse.json";
import Spinner from "./Spinner";
import { PropTypes } from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  state = {
    items: Array.from({ length: 20 }),
  };

  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "genrral",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    categoryL: PropTypes.string,
  };
  articles;
  // totalResults = 0;
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: true,
      totalResults: 0,
    };
    document.title = this.capitalize(this.props.category);
  }
  disableNext = false;
  page = 1;

  capitalize = (str) => {
    return str?.charAt(0)?.toUpperCase() + str?.slice(1);
  };

  async componentDidMount() {
    this.setState({ loading: true });
    this.getNews();
  }

  getNews = async () => {
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    );

    let parsedData = await data.json();
    this.setState({
      loading: false,
      totalResults: parsedData.totalResults,
      articles: parsedData.articles,
    }); 
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    );
    this.setState({ loading: true });
    let parsedData = await data.json();
    this.setState({
      loading: false,
      articles: this.state.articles.concat(parsedData.articles),
    });
  };

  render() {
    return (
      <div className="container">
        <h2>
          Top Headlines: {this.capitalize(this.props?.category)}{" "}
          {this.state.totalResults} {this.state.articles?.length} 
        </h2> 
        <InfiniteScroll
          dataLength={this.state.articles}
          next={this.fetchMoreData}
          hasMore={this.state.totalResults != this.state.articles?.length}
          loader={<Spinner />}
        >
          <div className="row my-2">
            {this.state.articles?.map((resp, index) => {
              return (
                <div className="col-md-4 my-2">
                  <NewsItem
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
  }
}

export default News;
