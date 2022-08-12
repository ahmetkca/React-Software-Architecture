import React from "react";
import { useDataSSR } from "../hooks/useDataSSR";

export const Articles = () => {


    const articles = useDataSSR("articles", async () => {
        const response = await fetch("http://localhost:8080/api/articles");
        return await response.json();
    })


    return (
        <div style={{ backgroundColor: 'green', color: 'white' }}>
            <h1>Articles:</h1>
            {articles ? articles.map(article => (
                <div key={article.id}>
                    <div style={{ border: '1px', margin: '2px', padding: '2px'}} >
                        <h3>{article.title}</h3>
                        <p>{article.body}</p>
                        <p>written by {article.author}</p>
                    </div>
                    <hr/>
                </div>
            )) : <p>Articles Loading...</p>}

        </div>
    )
}
export default Articles;