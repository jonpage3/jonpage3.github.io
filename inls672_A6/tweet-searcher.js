// JavaScript to demonstrate the use of the New York Times API to search articles.
// Add a click event listener to the 'Search' button.
// When clicked, call loadArticles() to find articles about the selected search term
   let searchButton = document.querySelector('#search');
   let searchTerm = document.querySelector('#search-term');
   searchButton.addEventListener('click', loadTweets);

   var obj;        // Global variable for the JSON object created from API response

   // When the user clicks 'Search', fetch the articles for the selected search term
   async function loadTweets() {
      let url = 'https://api.twitter.com/2/tweets/search/recent?query=' + searchTerm.value;
      try {
        let response = await fetch(url,{
        method: 'GET',
        headers: {
        'User-Agent': 'v2RecentSearchJS',
        "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAN6KPAEAAAAA9rJ4yD69M%2BcgEccryVuc2JV03LQ%3Djh95pbHpWhV5rxecur1UROGBV9qVXGhHCskmcIzlGXRNlBT8mH",
        }
        });

        obj = await response.json();
        console.log(obj);   // Look at this in the Inspector to see what the data structure looks like.

        //getArticles(); // Extract article information from API response and add to HTML web page

      } catch (error) {
        console.log(error);
      }
    }