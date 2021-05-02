   let searchButton = document.querySelector('#search');
   let searchTerm = document.querySelector('#search-term');
   searchButton.addEventListener('click', loadTweets);

   var obj;        // Global variable for the JSON object created from API response

   // When the user clicks 'Search', fetch the articles for the selected search term
   async function loadTweets() {
      let url = 'https://api.spotify.com/v1/search?query=' + searchTerm.value + '&type=album&client_id=0a0038ad8ada4ea594a343e6acdfa4da&client_secret=5091d7f5ae8f4e01a71c22b583395ea7';
      try {
        let response = await fetch(url,{
        headers: {
        "Client_secret" : "5091d7f5ae8f4e01a71c22b583395ea7"
        }
        });


        obj = await response.json();
        console.log(obj);   // Look at this in the Inspector to see what the data structure looks like.

        //getArticles(); // Extract article information from API response and add to HTML web page

      } catch (error) {
        console.log(error);
      }
    }