import React from "react";
import './newsObject.css';

const NewsObject = ({ title, description, url, urlToImage}) => {
    return (
        <div className="news-app">
            <div className="news-object">
                <img className="news-img" src={urlToImage} alt={urlToImage}/>
                <h3><a href={url}>{title}</a></h3>
                <p>{description}</p>
            </div>
            
        </div>
    )
}

export default NewsObject;