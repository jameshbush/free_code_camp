import React from "react";
import "./App.css";

interface IProps {}

interface IState {
  msg: string | null;
  loading: Boolean;
}

class App extends React.Component<IProps, IState> {
  constructor(props: {}) {
    super(props);
    this.state = { loading: false, msg: "hi" };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.state.msg}</p>
          <button
            onClick={() => {
              this.setState({ loading: true });
              fetch("/api/hello")
                .then((response) => response.json())
                .then(({ msg }) => this.setState({ loading: false, msg }));
            }}
          >
            {this.state.loading ? "Loading..." : "Random #"}
          </button>
          <button
            onClick={() => {
              this.setState({ loading: true });
              fetch("/api/async-chuck-norris")
                .then((response) => response.json())
                .then(({ msg }) => this.setState({ loading: false, msg }));
            }}
          >
            {this.state.loading ? "Loading..." : "Random Chuck"}
          </button>
        </header>
      </div>
    );
  }
}

export default App;
