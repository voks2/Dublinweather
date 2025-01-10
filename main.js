const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
const url = `https://api.openweathermap.org/data/2.5/weather?q=Dublin&appid=${apiKey}&units=metric`;

async function fetchWeather() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById('weather').innerText = `Temperature: ${data.main.temp} °C`;
  } catch (error) {
    document.getElementById('weather').innerText = 'Failed to load weather data.';
  }
}

fetchWeather();