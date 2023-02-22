import './App.css';
import { useEffect, useState, useCallback } from 'react';
import React from 'react';

import getWeather from './WeatherApi';

function App() {
  const [data, setData] = useState('');

  const fetchData = useCallback(async () => {
    const data1 = await getWeather();
    setData(data1);
  });

  useEffect(() => {
    fetchData();
  }, []);

  return <>data:{data.weather && data.weather[0].description}</>;
}

export default App;
