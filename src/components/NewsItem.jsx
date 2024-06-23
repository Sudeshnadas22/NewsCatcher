import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div>
                <div className="my-3">
                    <div className="card">
                        <div style={{display:'flex',
                            justifyContent:'flex-end',
                            position:'absolute',
                            right:'0'
                        }}>
                    <span className="badge rounded-pill bg-danger">{source}
                            </span>
                            </div>
                        <img src={!imageUrl ? "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/apple-intelligence-114112532-16x9_0.jpg?VersionId=U7l9i_qmDidPP94gQ3FpUPODvrbJ.guy" : imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-body-secondary">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
