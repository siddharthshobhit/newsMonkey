import React, { Component } from "react";

const NewsItem = (props) => {
  let { title, description, urlToImage, url, author, publishedAt, source } =
    props;
  return (
    <div className="">
      <div className="card">
        <div
          style={{
            display: "flex",
            position: "absolute",
            right: 0,
            justifyContent: "flex-end",
          }}
        >
          <span className="badge bg-danger rounded-pill">{source.name}</span>
        </div>

        <img
          src={
            urlToImage
              ? urlToImage
              : "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/448812"
          }
          className="card-img-top"
        />
        <div className="card-body">
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
};

export default NewsItem;
