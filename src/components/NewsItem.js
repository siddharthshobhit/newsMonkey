import React, { Component } from "react";

export class NewsItem extends Component {
  render(props) {
    let { title, description, urlToImage, url, author, publishedAt, source } =
      this.props;  
    return (
      <div className="">
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ zIndex: '1', left: '90%'}}>
            {source.name}
            {/* <span class="visually-hidden">unread messages</span> */}
          </span>

          <div className="card-body">
            <img
              src={
                urlToImage
                  ? urlToImage
                  : "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/448812"
              }
              className="card-img-top text-center"
            />
            <h5 className="card-title">{title?.slice(0, 35)} ...</h5>
            <p className="card-text">{description?.slice(0, 88)}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on
                {new Date(publishedAt).toGMTString()}
              </small>
            </p>
            {/* <div className="d-flex justify-content-between">
              <label>Author: {author}</label>
              <label>Date: {publishedAt.split("T")[0]}</label>
            </div> */}
            <a href={url} target="_blank" className="text-black">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
