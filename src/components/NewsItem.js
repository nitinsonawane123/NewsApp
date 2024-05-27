import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
          <div className="card" style={{width: "24rem"}}>
           <img src={!imageUrl?"https://www.livemint.com/lm-img/img/2024/05/26/1600x900/Cyclone_Remal_1716685044781_1716685045021.jpg":imageUrl} className="card-img-top" alt="..."/>
           <div className="card-body">
           <h5 className="card-title">{title}</h5>
           <p className="card-text">{description}</p>
           <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
          </div>
      </div>
      </div>
    )
  }
}

export default NewsItem
