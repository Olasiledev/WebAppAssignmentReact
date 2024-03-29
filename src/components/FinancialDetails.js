import React, { useState, useEffect } from "react";
import '../cssStyles/FinancialDetail.css'; 

const stockSymbols = ["AAPL", "MSFT", "GOOGL", "AMZN", "FB", "TSLA"];

// Comments for this file

// Below is the function for FinancialDetail that displays the values to the Dashboard using the setStockData sub-function

// and set the required details for the FinancialDataWidget to the dashboard..


function FinancialDetail() {
  const [stockData, setStockData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    //DETAILS VIEW
    const fetchData = async () => {
      setIsLoading(true); 
      try {
        const responses = await Promise.all(
          stockSymbols.map(symbol =>
            fetch(`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=bsXSeBnccajVCa8hGq5lprbGEtpbPC68`)
              .then(response => response.json())
          )
        );
        if (responses.some(response => response['Error Message'])) {
          throw new Error('Limit reached. Please upgrade your plan.');
        }
        setStockData(responses.map(response => response[0]).filter(Boolean)); 
      } catch (error) {
        setError(error.message); 
      } finally {
        setIsLoading(false); 
      }
    };
  
    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>; 
  if (stockData.length === 0) return <div>No data available at the moment.</div>; 

  return (
    <div className="financial-detail-container">
      <h2>Financial Details</h2>
      <div className="stocks-container">
        {stockData.map((stock, index) => (
          <div key={index} className="stock-detail">
            <h3>{stock.name} ({stock.symbol})</h3>
            <p>Price: ${stock.price}</p>
            <p>Change: {stock.change}%</p>
            <p>Year High: ${stock.yearHigh}</p>
            <p>Year Low: ${stock.yearLow}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FinancialDetail;
