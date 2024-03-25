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

function WeatherWidget() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const apiKey = "dd6e2d43d6883cdc5451370a909cd69a";
            const city = "Barrie";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                setWeather(data);
            } catch (error) {
                console.error("Failed to fetch weather data->", error);
            }
        };

        fetchWeather();
    }, []);

    if (!weather) return <div style={styles.paragraph}>Loading weather...</div>;

    return (
        <div style={styles.widgetContainer}>
            <h2 style={styles.header}>Weather in {weather?.name}</h2>
            <p style={styles.paragraph}>Temperature: {(weather?.main.temp - 273.15).toFixed(2)}°C</p>
            <p style={styles.paragraph}>Condition: {weather?.weather[0].description}</p>
        </div>
    );
}

export default WeatherWidget;
