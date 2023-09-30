import React  from "react";

const NewsItem = (props) => {
  // getting the props
  let { title, description, imageUrl, newsUrl, publishedAt, author, source } =
    props;
  return (
    // format for the card froom bootstrap
    <div className="my-4">
      <div className="card" style={{ min_width: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="  badge rounded-pill bg-danger">{source}</span>
        </div>
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
            <small className="text-body-secondary">
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
};

export default NewsItem;
