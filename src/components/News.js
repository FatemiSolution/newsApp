import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
   capitalizeFirstLetter = (string)=>{
      return string.charAt(0).toUpperCase() +string.slice(1)
   }
   static defaultProp = {
      country: "us",
      pageSize: 15,
      category: "general",
      search: 'iphone',
      
   };
   static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string,
      search: PropTypes.string,
      
   };
   //   defynng constructor
   constructor(props) {
      super(props);
      this.state = {
         articles: [],
         loading: false,
         page: 1,
         totalResults: 0,
      };
      document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewSify`
   }
   //  fetching url and parsing it
   async updateNews(pageNo = 0){
      this.props.setProgress(10)
      let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=0893fe334c98459b9729623e83cff16e&page=${this.state.page + pageNo}&pageSize=${this.props.pageSize}&q=${this.props.search}`;
      let data = await fetch(url);
      this.props.setProgress(30)
      this.setState({ loading: true });
      var parsedData = await data.json();
      console.log(parsedData);
      this.setState({
         articles: parsedData.articles,
         loading: false,
      }); //setting state from fetched data
      if(pageNo === 0){
         this.setState({
            totalResults: parsedData.totalResults,
         });
      }
      this.props.setProgress(100)
   }
   async componentDidMount() {
     
      this.updateNews();
      
   }
   handleNextClick = async () => {
      console.log("Next");
     
      this.setState({
         page: this.state.page + 1
      })
      this.updateNews(1)
   };
   handlePrevClick = async () => {
      console.log("previous");
    
      this.setState({
         page: this.state.page - 1
      })
      this.updateNews(-1);
   };
  fetchMoreData=async()=>{
   this.setState({
      page: this.state.page + 1
   })
      let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=0893fe334c98459b9729623e83cff16e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}&q=${this.props.search}`;
      // this.setState({ loading: true });
      let data = await fetch(url);
      var parsedData = await data.json();
      console.log(parsedData);
      this.setState({
         articles: this.state.articles.concat(parsedData.articles),
         loading: false,
         totalResults: parsedData.totalResults,
      }) //setting state from fetched data  
   };
   render() {
      return (
         // returning the cards dynamically along with props
         <>
            <h1 className="text-center">Newsify - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
            {this.state.loading && <Spinner />}
            <InfiniteScroll
               dataLength={this.state.articles.length}
               next={this.fetchMoreData}
               // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
               // inverse={true} //
               hasMore={this.state.articles.length !== this.state.totalResults}
               loader={<Spinner/>}
               >
                  <div className="container">
            <div className="row">
               {this.state.articles.map(function (e) {
                     return (
                        <div className="col-md-4 my-2" key={e.url}>
                           <NewsItem
                              title={e.title ? e.title.slice(0, 35) : ""}
                              description={
                                 e.description ? e.description.slice(0, 85) : ""
                              }
                              imageUrl={e.urlToImage}
                              newsUrl={e.url}
                              publishedAt ={e.publishedAt }
                              author={e.author}
                              source ={e.source.name}
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
                     Math.ceil(this.state.totalResults / this.props.pageSize)
                  }
                  className="btn btn-primary"
                  onClick={this.handleNextClick}
               >
                  Next &rarr;
               </button>
            </div> */}
         </>
      );
   }
}

export default News;
