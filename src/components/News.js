import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    this.state = {
      articles : [],
      loading: false,
      page:1
    }
  }

  async componentDidMount(){
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=eeefdb8907484a7fbe2ec54774a63b10&page=1";
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    this.setState({articles: parseData.articles})
  }

  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
        })} 
        </div>
      </div>
    )
  }
}

export default News
