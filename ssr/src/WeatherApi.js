const api_url =
  'https://api.openweathermap.org/data/2.5/weather?lat=51.507351&lon=-0.127758&appid=3de78f0f3b9cff7658f916a95cb0a915';

async function getWeather() {
  const response = await fetch(api_url);
  const data = await response.json();
  console.log('data', data);
  return data;

  // const { weather, coord } = data;
  // document.getElementById('weather').textContent = weather;
  // document.getElementById('coord').textContent = coord;
}

export default getWeather;

//Q: for every function I have to write export default? Can I use one export for all the fuctions?
