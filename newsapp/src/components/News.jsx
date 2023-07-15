import React, { Component } from 'react'
import NewsItem from './NewsItem'
export default class News extends Component {

  
    constructor(){
      super();
      this.state={
        articles:this.articles,
        loading:false
      }
    }
    async componentDidMount(){
      let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bd1a7ad3a5b74680a5c659a6eeabf9b3"
      let data=await fetch(url);
      let parsedData=await data.json()
      console.log(parsedData);
      this.setState({articles:parsedData.articles})
    }

  render() {
    return (
     <><div className="container my-3">

      <h2>
        News
      </h2>
      
      <div className="row">
      {this.state.articles.map((element)=>{
return  <div className="col-md-4" key={element.url}>
<NewsItem  title={element?element.title.slice(0,30):""} description={element.description ? element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
</div>


      })}
       
      
      </div>

     </div>

    
    
     </>
    )
  }
}
