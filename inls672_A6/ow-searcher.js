   let searchButton = document.querySelector('#search');
   let searchTerm = document.querySelector('#search-term');
   searchButton.addEventListener('click', loadWeather);

   var obj;        // Global variable for the JSON object created from API response

   // When the user clicks 'Search', fetch the articles for the selected search term
   async function loadWeather() {
      let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchTerm.value + '&APPID=4dbc6784d266647f37e36b1e1207323d';
      try {
        let response = await fetch(url);


        obj = await response.json();
        console.log(obj);   // Look at this in the Inspector to see what the data structure looks like.

        //getArticles(); // Extract article information from API response and add to HTML web page

      } catch (error) {
        console.log(error);
      }
    }