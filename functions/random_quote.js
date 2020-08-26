exports.handler = function (event, context) {
  try {
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
        {
          text: "It is not enough for code to work.",
          author:
            "Robert C. Martin, Clean Code: A Handbook of Agile Software Craftsmanship",
        },
        {
          text:
            "Sometimes at night I worry about TAMMY. I worry that she might get tired of it all. Tired of running at sixty-six terahertz, tired of all those processing cycles, every second of every hour of every day. I worry that one of these cycles she might just halt her own subroutine and commit software suicide. And then I would have to do an error report, and I don't know how I would even begin to explain that to Microsoft.",
          author:
            "Charles Yu, How to Live Safely in a Science Fictional Universe",
        },
        {
          text:
            "More importantly, our software worked. I don't just mean that it didn't bump, or that it performed according to the written specifications, or that it was efficient in producing reports. It really worked",
          author:
            "Eliyahu M. Goldratt, The Goal: A Process of Ongoing Improvement",
        },
        {
          text:
            "Everyday life is like programming, I guess. If you love something you can put beauty into it.",
          author: "Donald Knuth ",
        },
      ],
    };

    console.log("queryStringParameters", event.queryStringParameters);
    const index = Math.floor(Math.random() * quotes.quotes.length);
    const quote = quotes.quotes[index];

    const body = JSON.stringify(quote)
    console.log(`response body: ${body}`)
    return {
      statusCode: 200,
      body,
    };
  } catch (e) {
    console.log(e.message);
    return {
      statusCode: 500,
      body: JSON.stringify(e.message),
    };
  }
};
