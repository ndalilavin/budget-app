import React, { useState, useEffect } from "react";
import NewsObject from "./NewsObject";
import axios from "axios";
import './newsObject.css';


 const NewsFeed = () => {
    const [articles, setArticles] = useState([])
    
    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/everything?q=shopping&apiKey=07764aca70b44596ba2e4886983a4313')
            console.log(response)
            setArticles(response.data.articles)
        }
        getArticles()
    },[])

    return (
        <div style={{background: 'orange'}}>
            <h1 style={{textAlign: 'center', paddingTop: 20, textDecoration: 'underline'}}>Shopping News and Tips</h1>
            {articles.map(article => {
                return (
                    <NewsObject 
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage}
                    />
                )
            })}            
        </div>
    )
 }

 export default NewsFeed;