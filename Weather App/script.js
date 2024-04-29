document.addEventListener('DOMContentLoaded', function () {
    // Reference to the search button
    var searchButton = document.getElementById('search-button');
    
    // Add event listener to the search button
    searchButton.addEventListener('click', function () {
      // Get the value of the city input field
      var cityInput = document.getElementById('city-input').value;
      
      // Check if the city input is not empty
      if (cityInput.trim() !== '') {
        
        var apiKey = '375b6c91fbf25cb8a2b5542db42e1e89';
        var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityInput + '&appid=' + apiKey;
        
        // Fetch weather data from the API
        fetch(apiUrl)
          .then(function (response) {
            // Check if the response is successful
            if (response.ok) {
              // Parse the JSON response
              return response.json();
            } else {
              // If the response is not successful, throw an error
              throw new Error('Unable to fetch weather data');
            }
          })
          .then(function (data) {
            // Display the weather information in the app
            displayWeather(data);
          })
          .catch(function (error) {
            // Display an error message if there's an error fetching weather data
            alert(error.message);
          });
      } else {
        // Display an error message if the city input is empty
        alert('Please enter a city name');
      }
    });
  });
  
  // Function to display weather information in the app
  function displayWeather(data) {
    // Reference to the weather info container
    var weatherInfoContainer = document.querySelector('.weather-info');
  
    // Clear previous weather info
    weatherInfoContainer.innerHTML = '';
  
    // Create elements to display weather info
    var cityName = document.createElement('h2');
    cityName.textContent = data.name;
  
    var temperature = document.createElement('p');
    temperature.textContent = 'Temperature: ' + (data.main.temp - 273.15).toFixed(2) + ' °C'; // Convert temperature from Kelvin to Celsius
  
    var weatherDescription = document.createElement('p');
    weatherDescription.textContent = 'Weather: ' + data.weather[0].description;
  
    // Append weather info elements to the container
    weatherInfoContainer.appendChild(cityName);
    weatherInfoContainer.appendChild(temperature);
    weatherInfoContainer.appendChild(weatherDescription);
  }