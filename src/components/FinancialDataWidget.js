import React, { useEffect, useState } from 'react';

const styles = {
    widgetContainer: {
        background: '#f8f8f8',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        maxWidth: '400px',
        margin: '20px auto',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    header: {
        color: '#0056b3',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px',
        marginBottom: '20px',
    },
    paragraph: {
        color: '#333',
        marginBottom: '10px',
        lineHeight: '1.6',
    }
};

function FinancialDataWidget() {
    const [stockData, setStockData] = useState(null);

    useEffect(() => {
        const fetchStock = async () => {
            const symbol = "AAPL";
            const apiKey = "bsXSeBnccajVCa8hGq5lprbGEtpbPC68";
            const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                setStockData(data[0]);
            } catch (error) {
                console.error("Failed to fetch stock", error);
            }
        };

        fetchStock();
    }, []);

    if (!stockData) return <div style={styles.paragraph}>Loading data...</div>;

    return (
        <div style={styles.widgetContainer}>
            <h2 style={styles.header}>Stock Data</h2>
            <p style={styles.paragraph}>Symbol: {stockData.symbol}</p>
            <p style={styles.paragraph}>Price: ${stockData.price}</p>
            <p style={styles.paragraph}>Change: {stockData.change}</p>
            <p style={styles.paragraph}>Change Percent: {stockData.changePercent}%</p>
            <p style={styles.paragraph}>High Today: ${stockData.high}</p>
            <p style={styles.paragraph}>Low Today: ${stockData.low}</p>
            <p style={styles.paragraph}>Year High: ${stockData.yearHigh}</p>
            <p style={styles.paragraph}>Year Low: ${stockData.yearLow}</p>
        </div>
    );
}

export default FinancialDataWidget;
