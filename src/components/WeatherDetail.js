import React, { useState, useEffect } from "react";

// Comments for this file

// Below is the Function for the Weather Details that are being taken from the API request and returned to the Weather Widget...


const WeatherDetail = () => {
  const [weatherData, setWeatherData] = useState([]);
  const cities = ["Barrie", "New York", "Tokyo", "Paris", "London"];
  const API_KEY = "dd6e2d43d6883cdc5451370a909cd69a"; 
  const fetchInterval = 10000; 
  useEffect(() => {
    //FETCH WEATHER
    const fetchData = () => {
      setWeatherData([]);
      
      cities.forEach(city => {
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

        fetch(API_URL)
          .then(response => response.json())
          .then(data => {
            setWeatherData(weatherData => [...weatherData, {
              city: data.name,
              temperature: `${data.main.temp}°C`,
              humidity: `${data.main.humidity}%`,
              windSpeed: `${data.wind.speed} km/h`,
              description: data.weather[0].description,
              icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
            }]);
          })
          .catch(error => console.error("Fetching error:", error));
      });
    };

    fetchData(); 
    const intervalId = setInterval(fetchData, fetchInterval);

    return () => clearInterval(intervalId); 
  }, []);

// IT fetch the variables from the API like city, temperature, humidity, windSpeed, description etc and displays on dashboard 

  return (
    <div className="container mt-5">
      <h2>Top Cities Weather Details</h2>
      <div className="row">
        {weatherData.map((data, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4 shadow-sm">
              <img className="card-img-top" src={data.icon} alt="Weather icon" style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
              <div className="card-body">
                <h5 className="card-title">{data.city}</h5>
                <p className="card-text"><strong>Temperature:</strong> {data.temperature}</p>
                <p className="card-text"><strong>Humidity:</strong> {data.humidity}</p>
                <p className="card-text"><strong>Wind Speed:</strong> {data.windSpeed}</p>
                <p className="card-text"><strong>Description:</strong> {data.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDetail;
