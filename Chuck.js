// This function loads pokemon data from the Pokemon API
function fetchChuckJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
   
    const url = `https://api.chucknorris.io/jokes/random`;

    axios.get(url)
      .then(function(response) {
        return response.data; // SUBTLE difference with Fetch: response.data instead of response.json()
      })
      .then(function(random) {
        console.log('data decoded from JSON:', random);
  
        // Build a block of HTML
        const ChuckHtml = `
          <p><strong>${random.value}</strong></p>
          <img src="${random.icon_url}" />
        `;
        document.querySelector('#chuck-norris').innerHTML = ChuckHtml;
      });
  }
  
  fetchChuckJSON();