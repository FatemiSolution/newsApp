import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  //   defynng constructor

  //  fetching url and parsing it
  const updateNews = async (pageNo = 0) => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?category=${
      props.category
    }&country=${props.country}&apiKey=${props.apiKey}&page=${
      page + pageNo
    }&pageSize=${props.pageSize}&q=${props.search}`;
    let data = await fetch(url);
    props.setProgress(30);
    setLoading(true);
    var parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles);
    setLoading(false);
    //setting state from fetched data
    if (pageNo === 0) {
      setTotalResults(parsedData.totalResults);
    }
    props.setProgress(100);
  };
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewSify`;
    updateNews();
  },[]);

  const handleNextClick = async () => {
    console.log("Next");
    setPage(page + 1);

    updateNews(1);
  };
  const handlePrevClick = async () => {
    console.log("previous");
    setPage(page - 1);
    updateNews(-1);
  };
  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?category=${
      props.category
    }&country=${props.country}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}&q=${props.search}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    var parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setLoading(false);
    setTotalResults(parsedData.totalResults);
    //setting state from fetched data
  };
  return (
    // returning the cards dynamically along with props
    <>
      <h1 className="text-center my-2" style={{ color: `${props.Mode==='light'?'black':'white'}` }}>
        Newsify - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
        // inverse={true} //
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map(function (e) {
              return (
                <div className="col-md-4 my-2" key={e.url}>
                  <NewsItem
                    title={e.title ? e.title.slice(0, 35) : ""}
                    description={
                      e.description ? e.description.slice(0, 85) : ""
                    }
                    imageUrl={e.urlToImage}
                    newsUrl={e.url}
                    publishedAt={e.publishedAt}
                    author={e.author}
                    source={e.source.name}
                    Mode={props.Mode}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-around">
               <button
                  disabled={this.state.page <= 1}
                  type="buttom"
                  className="btn btn-primary"
                  onClick={this.handlePrevClick}
               >
                  &larr; Previous
               </button>
               <button
                  id="next"
                  type="buttom"
                  style={{ width: "103px" }}
                  disabled={
                     this.state.page + 1 >
                     Math.ceil(this.state.totalResults / props.pageSize)
                  }
                  className="btn btn-primary"
                  onClick={this.handleNextClick}
               >
                  Next &rarr;
               </button>
            </div> */}
    </>
  );
};
News.defaultProp = {
  country: "us",
  pageSize: 15,
  category: "general",
  search: "iphone",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  search: PropTypes.string,
};
export default News;
