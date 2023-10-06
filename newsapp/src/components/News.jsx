import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export default class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:8,
    category:"general",
  }

  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,


  }
    constructor(){
      super();
      this.state={
        articles:[],
        loading:false,
        page:1,
        totalResults: 0

      }
    }
    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bd1a7ad3a5b74680a5c659a6eeabf9b3&pageSize=${this.props.pageSize}`;

      let data=await fetch(url);
      let parsedData=await data.json()
      console.log(parsedData);
      this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
    }

    handlePreClick= async()=>{



      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bd1a7ad3a5b74680a5c659a6eeabf9b3&page=${this.state.page+1}&pageSIze=${this.props.pageSize}`;
      let data=await fetch(url);
      let parsedData=await data.json()
      console.log(parsedData);


      this.setState({
      page:this.state.page-1,
      articles:parsedData.articles
      })

    }

    handleNexClick=async()=>{
if(this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize)) {
      }
      else{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bd1a7ad3a5b74680a5c659a6eeabf9b3&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      let data=await fetch(url);
      let parsedData=await data.json()
      console.log(parsedData);


      this.setState({
      page:this.state.page+1,
      articles:parsedData.articles
})
       } }

  render() {
    return (
     <><div className="container my-3">

      <h1 className="text-center">News</h1>

      <div className="row">
      {this.state.articles.map((element)=>{
return  <div className="col-md-4" key={element.url}>
<NewsItem  title={element.title?element.title.slice(0,30):""} description={element.description ? element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
</div>


      })}


      </div>
      <div className="container d-flex justify-content-between">
      <button  disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePreClick}>&larr; Previous</button>
      <button disabled={ (this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)) } type="button" className="btn btn-primary" onClick={this.handleNexClick}>Next &rarr;</button>
      </div>

     </div>



     </>
    )
  }
}
