import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { TestDemo } from "./TestDemo";
import { certificationsData } from "./certificationsData";

interface IProps {}
interface IState {}

export function App(props: IProps, state: IState) {
  return (
    <Router>
      <Switch>
        <Route path="/test-demo" component={TestDemo} />
        <Route path="/" exact component={Home} />
        {certificationsData.map(({ projects }) =>
          projects.map(({ path, component }) => (
            <Route path={path} component={component} />
          ))
        )}
      </Switch>
    </Router>
  );
}
