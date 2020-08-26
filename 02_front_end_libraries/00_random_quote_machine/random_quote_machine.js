// const API_ENDPOINT = "https://icanhazdadjoke.com/";
const API_ENDPOINT = "http://127.0.0.1:8888/.netlify/functions/random_quote";

async function tellDadJoke() {
    const joke = await fetch(API_ENDPOINT, { headers: { "Accept": "application/json" } })
        .then(response => response.json())
        .then(data => ({ statusCode: 200, body: data.joke }))
        .catch(error => ({ statusCode: 422, body: String(error) }));

    document.getElementById('text').innerHTML = joke.body;
}

tellDadJoke();
