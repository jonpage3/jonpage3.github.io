

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


    let weatherData = `<section id="town_info">
                          <h2 class="townname" onclick="townMap('${obj.coord.lat}','${obj.coord.lon}')">${obj.name}, ${obj.sys.country}</h2>
                          <h4>current temperature: ${obj.main.temp} Fahrenheit</h4>
                          <h5>but it feels like... ${obj.main.feels_like}</h5>
                          <h4>today&#x27s max: ${obj.main.temp_max}  Fahrenheit</h4>
                          <section id="map"></section>

                       </section>`;


  let weather_display = document.querySelector('#weather-details');
  weather_display.innerHTML = weatherData;

}

function townMap(lat, lon) {
      var mymap = L.map('map').setView([lat, lon], 13);
      mymap.setView([lat, lon], 13);
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
   } ).addTo(mymap);

   L.marker([lat, lon]).addTo(mymap);
 }