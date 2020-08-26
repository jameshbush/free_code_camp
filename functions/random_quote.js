exports.handler = async (event, context) => {
  const quotes = {
    quotes: [
      {
        text:
          "The test of the machine is the satisfaction it gives you. There isn't any other test. If the machine produces tranquility it's right. If it disturbs you it's wrong until either the machine or your mind is changed.",
        author:
          "Robert M. Pirsig, Zen and the Art of Motorcycle Maintenance: An Inquiry Into Values",
      },
      {
        text:
          "That's the thing about people who think they hate computers. What they really hate is lousy programmers.",
        author: "Larry Niven",
      },
      {
        text:
          "The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.",
        author: "Joseph Weizenbaum",
      },
    ],
  };
  try {
    console.log("queryStringParameters", event.queryStringParameters);
    const index = Math.floor(Math.random() * quotes.quotes.length);
    const quote = quotes.quotes[index];
    const body = JSON.stringify(quote);
    console.log(`response body: ${body}`);

    return { statusCode: 200, body };
  } catch (e) {
    console.log(e.message);
    return { statusCode: 500, body: JSON.stringify(e.message) };
  }
};
