import React from "react";
import { initializeTestRunner } from "./utils/scripts/injectFCCTests";
// TODO: install D3

// See example here https://eng.wealthfront.com/2017/02/14/integrating-d3-into-react/
class BarChart extends React.Component {
  svg: SVGElement | null;
  constructor(props: any) {
    super(props);
    this.svg = null;
  }

  componentDidMount() {
    this.drawChart();
    initializeTestRunner();
  }

  shouldComponentUpdate() {
    return false;
  }

  drawChart() {
    if (this.svg === null) return;
    this.svg.textContent = "hello, world!";
    this.svg.setAttribute("hight", "100");
    this.svg.setAttribute("width", "100");
    this.svg.setAttribute("fill", "black");
  }

  render() {
    return (
      <div>
        <svg id="bar-chart" ref={(elem) => (this.svg = elem)}></svg>
      </div>
    );
  }
}

export { BarChart };
