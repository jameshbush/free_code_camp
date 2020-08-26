// const API_ENDPOINT = "http://localhost:8888/api/random_quote"; // when local
const API_ENDPOINT = "http://172.16.43.128:8888/api/random_quote"; // TODO: check cors on deploy, may want to move FE to netlify

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
