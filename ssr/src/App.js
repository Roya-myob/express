import './App.css';
import { useState } from 'react';
import React from 'react';

//Q: commenting data returns 'data' is not defined, but the whole getWeatheh fun is exported, why data is not accessibe?
import data from './WeatherApi';
import getWeather from './WeatherApi';

function App() {
  getWeather();
  return (
    <>
      <p>
        weather:<span id="weather"></span>
      </p>
      <p>data: {data}</p>
    </>
  );
}

export default App;

//Q: Why data object is not accessible in UI?
//Q: Is there a faster way for build and run ?
