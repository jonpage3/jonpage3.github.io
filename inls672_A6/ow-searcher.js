

let searchButton = document.querySelector('#search');
let searchTerm = document.querySelector('#search-term');
searchButton.addEventListener('click', loadWeather);

var obj;        // Global variable for the JSON object created from API response

   // When the user clicks 'Search', fetch the data for the weather item
async function loadWeather() {
  let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchTerm.value + '&units=imperial&APPID=4dbc6784d266647f37e36b1e1207323d';
  try {
     let response = await fetch(url);
     obj = await response.json();
     console.log(obj);

     getWeather(); // Extract weather information from API response and add to HTML web page

  } catch (error) {
     console.log(error);
  }
}

function getWeather() {

  //obj.response.docs.forEach(town => {
    let weatherData = `<section>
                          <h2>${obj.name}</h2>
                          <h4>current temperature: ${obj.main.temp} Fahrenheit</h4>
                          <h5>but feels like... ${obj.main.feels_like}</h5>
                          <h4>max temperature: ${obj.main.temp_max}  Fahrenheit</h4>

                       </section>`;
  //});

  let weather_display = document.querySelector('#weather-details');
  weather_display.innerHTML = weatherData;

}