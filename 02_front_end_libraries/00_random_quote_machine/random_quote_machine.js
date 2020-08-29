const API_ENDPOINT = `../../api/random_quote`;

async function tellDadJoke() {
  fetch(API_ENDPOINT)
    .then((res) => res.json())
    .then(({ text, author }) => {
      document.getElementById("text").innerHTML = text;
      document.getElementById("author").innerHTML = author;
    })
    .catch((error) => ({ statusCode: 422, body: String(error) }));
}

tellDadJoke();
