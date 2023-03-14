import './App.css';
import { useEffect, useState, useCallback } from 'react';
import React from 'react';

import getWeather from './WeatherApi';
import getGeo from './Geolocation';

function App() {
  const [data, setData] = useState('');
  const [position, setPosition] = useState('');

  const fetchWeatherData = async () => {
    const data1 = await getWeather(position);
    setData(data1);
  };

  const fetchGeolocationData = async () => {
    await getGeo((pos) => {
      setPosition(pos);
      console.log('pos---', pos);
    });
  };

  useEffect(() => {
    if (!position) {
      fetchGeolocationData();
    }

    if (position && !data) {
      fetchWeatherData();
    }
  }, [position, data]);

  return (
    <>
      weather is {data.weather && data.weather[0].description}
      <div> Current temperature in celsius: {data.main && data.main.temp}</div>
      <div> Geolocation latitude: {position.coords && position.coords.latitude}</div>
      <div> Geolocation longitude: {position.coords && position.coords.longitude}</div>
      <div>
        {' '}
        Display a simple icon and label based on the weather information provided (eg. sunny,
        cloudy, rainy etc).
      </div>
    </>
  );
}

export default App;
