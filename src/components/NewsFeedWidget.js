import React, { useEffect, useState } from 'react';

const styles = {
    widgetContainer: {
        background: '#f8f8f8',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        maxWidth: '600px',
        margin: '20px auto',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    header: {
        color: '#0056b3',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px',
        marginBottom: '20px',
    },
    article: {
        color: '#333',
        marginBottom: '15px',
        lineHeight: '1.6',
        borderBottom: '1px solid #eee',
        paddingBottom: '10px',
    }
};

function NewsFeedWidget() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const apiKey = "d244e23c11934874aba112cfe52cda46"; 
            const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                setArticles(data.articles.slice(0, 3));
            } catch (error) {
                console.error("Failed to fetch news", error);
            }
        };

        fetchNews();
    }, []);

    if (articles.length === 0) return <div style={styles.article}>Loading news...</div>;

    return (
        <div style={styles.widgetContainer}>
            <h2 style={styles.header}>Latest News</h2>
            {articles.map((article, index) => (
                <div key={index} style={styles.article}>
                    {article.title}
                </div>
            ))}
        </div>
    );
}


export default NewsFeedWidget;
