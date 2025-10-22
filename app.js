// Variables to get the html elements needed

// placeholder for joke
const jokeElement = document.getElementById('joke');

// button to generate joke
const jokeBtn = document.getElementById('jokeBtn');

// call the function
generateJoke();

// create the function needed to call the API
function generateJoke() {

    // set configuration for fetching data from API
    const config = {
        headers: {
            Accept: 'application/json', // tell API we want answer in js
        },
    };

    fetch('https://icanhazdadjoke.com', config) // fetch the API with the configurations provided above "config"
        .then((res) => res.json()) // get the respons (res) as js
        .then((data) => { // get the data (object) from the respons (res)
            jokeElement.innerHTML = data.joke; // insert the specific values from key .joke in innerHTML
        });
}

jokeBtn.addEventListener('click', generateJoke);

// PSUEDO CODE BELOW:
/*
- Get the variables for the HTML-elements (button and p-tag)
- Call the function 
- Define function that calls the API endpoint and returns json-format
    
    - set configurations for API (return: json)
    - call (fetch) the API with our configurations 
        - wait for the respons -> set the respons to JS
        - access the data we want (in this case data.joke) and parse the data into innerHTML

- Add eventlistener that will call function that will manipulate the dom
*/

