import React from "react";
import { initializeTestRunner, cleanUpTestRunner } from "../../utils/scripts/injectFCCTests";
import * as d3 from "d3";
import "./styles.scss";

const GDP_API_ENDPOINT =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";
const BAR_WIDTH = 3;
const BAR_SPACE = 3;

const PADDING = 60;
const SCALING = 50;

const DATE_INDEX = 0;
const GDP_INDEX = 1;

// https://www.freecodecamp.org/learn/data-visualization/data-visualization-projects/visualize-data-with-a-bar-chart
// https://observablehq.com/@d3/lets-make-a-bar-chart?collection=@d3/lets-make-a-bar-chart
// See example here https://eng.wealthfront.com/2017/02/14/integrating-d3-into-react/
class BarChart extends React.Component {
  async componentDidMount() {
    initializeTestRunner();
    await this.drawChart();
  }
  componentWillUnmount = () => cleanUpTestRunner();
  shouldComponentUpdate = () => false;

  async drawChart() {
    let { data, ...rest } = await fetch(GDP_API_ENDPOINT).then((res) => res.json());
    console.log(data[0][0], data[0][1], data, rest);

    const maxGdp = d3.max(data, ([, gdp]) => gdp);
    const width = data.length * BAR_WIDTH + PADDING * 2;
    const hight = maxGdp / SCALING + PADDING * 2;

    const svg = d3.select("#bar-chart-svg").attr("width", width).attr("height", hight);

    const xScale = d3
      .scaleTime()
      .domain([new Date(data[0][0]), new Date(data[data.length - 1][0])])
      .range([PADDING, width - PADDING]);
    const yScale = d3
      .scaleLinear()
      .domain([0, maxGdp])
      .range([hight - PADDING, PADDING]);

    // https://www.pluralsight.com/guides/create-tooltips-in-d3js
    var tooltip = svg
      .append("text")
      .attr("id", "tooltip")
      .attr("x", PADDING + 10)
      .attr("y", PADDING + 10)
      .style("opacity", 0.5);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (_, i) => i * BAR_SPACE + PADDING)
      .attr("y", ([, gdp], _) => hight - gdp / SCALING - PADDING)
      .attr("width", BAR_WIDTH)
      .attr("height", ([, gdp]) => gdp / SCALING)
      .attr("class", "bar")
      .attr("data-date", (d) => d[DATE_INDEX])
      .attr("data-gdp", (d) => d[GDP_INDEX])
      .on("mouseover", () => tooltip.style("opacity", 0.65))
      .on("mouseleave", () => tooltip.style("opacity", 0))
      .on("mousemove", (_event, [year, gdp]) => {
        if (!year || !gdp) return;
        tooltip.text(`${year.slice(0, 7)}: ${gdp}`).attr("data-date", year);
      });

    svg
      .append("g")
      .attr("id", "x-axis")
      .attr("transform", `translate(0, ${hight - PADDING})`)
      .call(d3.axisBottom(xScale));
    svg
      .append("g")
      .attr("id", "y-axis")
      .attr("transform", `translate(${PADDING}, 0)`)
      .call(d3.axisLeft(yScale));

    // axis label
    svg
      .append("text")
      .attr("class", "axis-label")
      .attr("y", 15)
      .attr("x", -275)
      .attr("transform", "rotate(-90)")
      .text("GDP (billions)");
    svg.append("text").attr("class", "axis-label").attr("y", 455).attr("x", 450).text("Year");
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 id="title">USA Quarterly GDP</h1>
            <svg id="bar-chart-svg" ref={(elem) => (this.svg = elem)}></svg>
          </div>
        </div>
      </div>
    );
  }
}

export { BarChart };
