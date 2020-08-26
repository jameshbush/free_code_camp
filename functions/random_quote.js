exports.handler = function (event, context) {
  try {
    console.log("queryStringParameters", event.queryStringParameters);
    const quotes = require("../quotes.json");
    const index = Math.floor(Math.random() * quotes.quotes.length);
    const quote = quotes.quotes[index];

    return {
      statusCode: 200,
      body: JSON.stringify(quote),
    };
  } catch (e) {
    console.log(e.message);
    return {
      statusCode: 500,
      body: JSON.stringify(e.message),
    };

  }
};
