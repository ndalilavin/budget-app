import React, { useState, useEffect } from "react";
import axios from "axios";


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
        <div>
            
        </div>
    )
 }

 export default NewsFeed;