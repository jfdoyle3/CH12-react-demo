import React, {useState, useEffect} from 'react';
import axios from 'axios';

const NewsContext = React.createContext({});

const NewsProvider =(props)=>{

    const {articles,loading}= useState([]);


        const displayAtricles=()=>{
            return articles.map((article, i)=>(
                <Article article={article} key={article.url}/>
            ))
        }
}