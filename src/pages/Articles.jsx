import React, { useEffect, useState } from "react";

export const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch("/api/articles");
            const data = await response.json();
            setArticles(data);
        } )();
    } , []); // empty array as second argument to useEffect means it will only run once (like componentDidMount in class components)


    return (
        <div style={{ backgroundColor: 'green', color: 'white' }}>
            <h1>Articles:</h1>
            {articles ? articles.map(article => (
                <>
                    <div style={{ border: '1px' }} key={article.id}>
                        <h3>{article.title}</h3>
                        <p>{article.body}</p>
                        <p>written by {article.author}</p>
                    </div>
                    <hr/>
                </>
            )) : <p>Articles Loading...</p>}

        </div>
    )
}
export default Articles;