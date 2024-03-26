import React, { useEffect, useState } from 'react';

const styles = {
    widgetContainer: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        maxWidth: '400px',
        margin: '20px auto',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s ease-in-out',
    },
    widgetContainerHover: {
        transform: 'translateY(-5px)',
    },
    widgetHeader: {
        color: '#0056b3',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px',
        marginBottom: '20px',
        textAlign: 'center',
        fontSize: '24px',
    },
    widgetParagraph: {
        color: '#333',
        marginBottom: '10px',
        lineHeight: '1.6',
    },
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

    if (!stockData) return <div style={styles.widgetParagraph}>Loading data...</div>;

    return (
        <div style={{ ...styles.widgetContainer, ...(stockData ? styles.widgetContainerHover : {}) }}>
            <h2 style={styles.widgetHeader}>Stock Data</h2>
            <p style={styles.widgetParagraph}>Symbol: {stockData.symbol}</p>
            <p style={styles.widgetParagraph}>Price: ${stockData.price}</p>
            <p style={styles.widgetParagraph}>Change: {stockData.change}</p>
            <p style={styles.widgetParagraph}>Change Percent: {stockData.changePercent}%</p>
            <p style={styles.widgetParagraph}>High Today: ${stockData.high}</p>
            <p style={styles.widgetParagraph}>Low Today: ${stockData.low}</p>
            <p style={styles.widgetParagraph}>Year High: ${stockData.yearHigh}</p>
            <p style={styles.widgetParagraph}>Year Low: ${stockData.yearLow}</p>
        </div>
    );
}

export default FinancialDataWidget;
