import React, { Component } from "react";
import NewsItem from "./NewsItem";
import SampleResponse from "../SampleResponse.json";
import Spinner from "./Spinner";
import { PropTypes } from "prop-types";
export class News extends Component {
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
  totalResults = 0;
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      page: 0,
      loading: true,
    };
    document.title = this.capitalize(this.props.category);
  }
  disableNext = false;
  page = 1;

  capitalize = (str) => {
   return str?.charAt(0)?.toUpperCase() + str?.slice(1);
  } 

  async componentDidMount() {
    this.setState({ loading: true });
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.page}&pageSize=${this.props.pageSize}`
    );

    let parsedData = await data.json();
    this.setState({ loading: false });
    this.totalResults = parsedData.totalResults;
    this.setState((this.articles = parsedData.articles));
  }

  PreviousPage = async () => {
    document.title = "Sid";
    this.page = this.page - 1;
    this.disableNext = false;
    if (this.page > 0) {
      this.componentDidMount();
    }
  };

  NextPage = async () => {
    this.page = this.page + 1;
    let page = this.page;
    if (this.page > Math.ceil(this.totalResults / this.props.pageSize)) {
      this.disableNext = true;
    } else {
      this.componentDidMount();
      if (page + 1 > Math.ceil(this.totalResults / this.props.pageSize)) {
        this.disableNext = true;
      }
    }
  };

  render() {
    return (
      <div className="container">
        <h2>
          Top Headlines: {this.capitalize(this.props?.category)}
          {/* {this.props?.category?.charAt(0)?.toUpperCase() +
            this.props?.category?.slice(1)} */}
        </h2>
        {this.state.loading && <Spinner />}
        <div className="row my-2">
          {!this.state.loading &&
            this.articles?.map((resp, index) => {
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
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.PreviousPage}
            disabled={this.page == 1}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.NextPage}
            disabled={this.disableNext}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default News;
