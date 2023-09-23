import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
export class News extends Component {
   capitalizeFirstLetter = (string)=>{
      return string.charAt(0).toUpperCase() +string.slice(1)
   }
   static defaultProp = {
      country: "us",
      pageSize: 15,
      category: "general",
      search: "",
      
   };
   static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string,
      search:PropTypes.string
   };
   //   defynng constructor
   constructor(props) {
      super(props);
      this.state = {
         articles: [],
         loading: false,
         page: 1,
         search:'english',
      };
      document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewSify`
   }
   //  fetching url and parsing it
   async componentDidMount() {
      let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=0893fe334c98459b9729623e83cff16e&page=1&pageSize=${this.props.pageSize}&q=${this.props.search}`;
      let data = await fetch(url);
      this.setState({ loading: true });
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
         articles: parsedData.articles,
         totalResults: parsedData.totalResults,
         loading: false,
      }); //setting state from fetched data
   }
   handleNextClick = async () => {
      console.log("Next");
      let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category
         }&country=${this.props.country
         }&apiKey=0893fe334c98459b9729623e83cff16e&page=${this.state.page + 1
         }&pageSize=${this.props.pageSize}&q=${this.props.search}`;
      let data = await fetch(url);
      this.setState({ loading: true });
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
         page: this.state.page + 1,
         articles: parsedData.articles,
         loading: false,
      });
   };
   handlePrevClick = async () => {
      console.log("previous");
      let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category
         }&country=${this.props.country
         }&apiKey=0893fe334c98459b9729623e83cff16e&page=${this.state.page - 1
         }&pageSize=${this.props.pageSize}&q=${this.props.search}`;
      let data = await fetch(url);
      this.setState({ loading: true });
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
         page: this.state.page - 1,
         articles: parsedData.articles,
         loading: false,
      });
   };
   render() {
      return (
         // returning the cards dynamically along with props
         <div className="container my-3">
            <h1 className="text-center">Newsify - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
            {this.state.loading && <Spinner />}
            <div className="row">
               {!this.state.loading &&
                  this.state.articles.map(function (e) {
                     return (
                        <div className="col-md-4 my-2" key={e.url}>
                           <NewsItem
                              title={e.title ? e.title.slice(0, 40) : ""}
                              description={
                                 e.description ? e.description.slice(0, 85) : ""
                              }
                              imageUrl={e.urlToImage}
                              newsUrl={e.url}
                           />
                        </div>
                     );
                  })}
            </div>
            <div className="container d-flex justify-content-around">
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
                     Math.ceil(this.state.totalResults / this.props.pageSize)
                  }
                  className="btn btn-primary"
                  onClick={this.handleNextClick}
               >
                  Next &rarr;
               </button>
            </div>
         </div>
      );
   }
}

export default News;
