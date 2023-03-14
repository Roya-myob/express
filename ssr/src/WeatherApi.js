export default async function getWeather(position) {
  const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=3de78f0f3b9cff7658f916a95cb0a915&units=metric`;
  const response = await fetch(api_url);
  const data = await response.json();
  console.log('weather data', data);
  return data;
}
//  'https://api.openweathermap.org/data/2.5/weather?lat=51.507351&lon=-0.127758&appid=3de78f0f3b9cff7658f916a95cb0a915&units=metric';
