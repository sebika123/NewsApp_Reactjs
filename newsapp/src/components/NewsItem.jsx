import React, { Component } from 'react'

export default class NewsItem extends Component {


  
  render() {

    let {title,description,imageUrl,newsUrl}=this.props;
    return (
     <>
     
     <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl?"https://www.syracuse.com/resizer/uarCgNK6_HNaB-6u1DkbYawEii8=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NZIIYWVEQVERZH4LQKQ7SIRAEI.jpg":imageUrl } className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl}  rel="noreferrer"  target="_blank" className="btn btn-primary">Read More</a>
  </div>
</div>
     
     </>
    )
  }
}
