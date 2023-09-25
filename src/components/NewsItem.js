import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    // getting the props
    let { title, description, imageUrl, newsUrl, publishedAt, author, source } =
      this.props;
    return (
      // format for the card froom bootstrap
      <div className="my-4">
        <div className="card" style={{ min_width: "100%" }}>
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"style={{left:'90%',zIndex:1}}>
              {source}
              <span class="visually-hidden">unread messages</span>
            </span>
          <img
            src={imageUrl}
            width={150}
            height={200}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small class="text-body-secondary">
                {" "}
                {author != null ? "By " + author : ""} on{" "}
                {new Date(publishedAt).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} className="btn btn-sm btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
