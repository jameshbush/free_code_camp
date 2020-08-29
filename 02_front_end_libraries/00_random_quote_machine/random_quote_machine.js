const API_ENDPOINT = `../../api/random_quote`;

async function getRandomQuote() {
  fetch(API_ENDPOINT)
    .then((res) => res.json())
    .then(({ text, author }) => {
      document.getElementById("text").innerHTML = text;
      document.getElementById("author").innerHTML = `${author}`;
    })
    .catch((error) => ({ statusCode: 422, body: String(error) }));
}

getRandomQuote();
document.getElementById("new-quote").addEventListener("click", getRandomQuote);
