import React  from "react";

const NewsItem = (props) => {
  // getting the props
  let { title, description, imageUrl, newsUrl, publishedAt, author, source } =
    props;
  return (
    // format for the card froom bootstrap
    <div className="my-4">
      <div className="card" style={{ min_width: "100%",color: `${props.Mode==='light'?'black':'white'}`,backgroundColor: `${props.Mode==='light'?'white':'#454545'}` }}>
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
          <p className="card-text" >
            <small  style={{color: `${props.Mode==='light'?'#3C4048':'#B2B2B2'}`}}>
              {" "}
              {author != null ? "By " + author : ""} on{" "}
              {new Date(publishedAt).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} className={`btn btn-sm btn-${props.Mode==='light'?'primary':'dark'}`}>
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
