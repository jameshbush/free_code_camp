import React from "react";
import "./App.css";

interface IProps {
}

interface IState {
  msg: string | null;
  loading: Boolean;
}

class App extends React.Component<IProps, IState> {
  constructor(props: {}) {
    super(props);
    this.state = { loading: false, msg: null };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.state.msg}</p>
          <button
            onClick={() => {
              this.setState({ loading: true });
              fetch("/.netlify/functions/hello")
                .then((response) => response.json())
                .then((json) =>
                  this.setState({ loading: false, msg: json.msg })
                );
            }}
          >
            {/* {this.state.loading ? 'Loading...' : 'Click me'} */}
            Click
          </button>
        </header>
      </div>
    );
  }
}

export default App;
