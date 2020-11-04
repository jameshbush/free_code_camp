import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { cleanUpTestRunner, initializeTestRunner } from "../../utils/scripts/injectFCCTests";

interface IQuoteMachineState {
  text: string;
  author: string;
  tweetQuote: string;
}

type QuoteType = {
  text: string;
  author: string;
};

class RandomQuoteMachine extends React.Component<{}, IQuoteMachineState> {
  tweetBase: string = "https://twitter.com/intent/tweet?via=jameshbush&text=";

  constructor(props: {}) {
    super(props);

    this.generateTweetQuote = this.generateTweetQuote.bind(this);
    this.getRandomQuote = this.getRandomQuote.bind(this);

    this.state = {
      text: "",
      author: "",
      tweetQuote: `${this.tweetBase}Check out the developer jameshbush.com`,
    };
  }

  componentDidMount() {
    this.getRandomQuote();
    initializeTestRunner(undefined, "run");
  }
  componentWillUnmount = () => cleanUpTestRunner();

  async getRandomQuote(): Promise<void> {
    return fetch("/api/random_quote")
      .then((res) => res.json())
      .then(({ text, author }) => this.setRandomQuote({ text, author }));
  }

  setRandomQuote({ text, author }: QuoteType) {
    this.setState({
      text,
      author,
      tweetQuote: this.generateTweetQuote({ text, author }),
    });
  }

  generateTweetQuote = ({ text, author }: QuoteType): string =>
    `${this.tweetBase}jameshbush.com ${text} --${author}`;

  render() {
    return (
      <div id="quote-box">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center">Random Quote Generator</h1>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
              <blockquote>
                <p id="text">{this.state.text}</p>
                <footer id="author">{this.state.author}</footer>
              </blockquote>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col>
              <button id="new-quote" className="btn btn-primary pull-left mr-2" onClick={this.getRandomQuote}>
                New Quote
              </button>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={this.state.tweetQuote}
                id="tweet-quote"
                className="pull-right"
              >
                <button className="btn btn-secondary">Tweet Quote</button>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { RandomQuoteMachine };
