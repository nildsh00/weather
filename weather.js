const apiKey ="2bb9643f2e73a774058de615dd4f0c0e"; // Replace with your OpenWeatherMap API key

// Get weather by user-inputted city name
function getWeatherByCity() {
    const city = document.getElementById('city').value;
    if (city) {
        fetchWeatherData(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    } else {
        alert("Please enter a city name.");
    }
}

// Fetch weather data from API
function fetchWeatherData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error fetching weather data:', error));
}

// Display weather data on the page
function displayWeather(data) {
    const location = document.getElementById('location');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const wind = document.getElementById('wind');
    const humidity = document.getElementById('humidity');
    const visibility = document.getElementById('visibility');

    if (data.cod === 200) {
        location.textContent = `Location: ${data.name}, ${data.sys.country}`;
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        description.textContent = `Weather: ${data.weather[0].description}`;
        wind.textContent = `Wind: ${data.wind.speed} KM/H`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        visibility.textContent = `Visibility: ${data.visibility / 1000} KM`;
    } else {
        alert("City not found. Please enter a valid city name.");
    }
}
