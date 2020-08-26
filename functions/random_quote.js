var fs = require("fs");
var path = require("path");

var jsonPath = path.join(__dirname, "quotes.json");
var quotesJson = fs.readFileSync(jsonPath, "utf8");

exports.handler = function (event, context) {
  try {
    console.log("queryStringParameters", event.queryStringParameters);
    const quotes = JSON.parse(quotesJson);
    const index = Math.floor(Math.random() * quotes.quotes.length);
    const quote = quotes.quotes[index];

    return {
      statusCode: 200,
      body: JSON.stringify(quote),
    };
  } catch (error) {
    console.log(error);
  }
};
