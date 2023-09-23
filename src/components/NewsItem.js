
import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    // getting the props
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      // format for the card froom bootstrap
      <div className='my-4'>
        <div className= "card" style={{min_width:'100%'}}>
          <img src= {imageUrl} width={150} height={200} className= "card-img-top" alt="..."/>
          <div className= "card-body">
            <h5 className= "card-title">{title}...</h5>
            <p className= "card-text">{description}...</p>
            <a href={newsUrl} className= "btn btn-sm btn-primary">Read more</a>


          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem