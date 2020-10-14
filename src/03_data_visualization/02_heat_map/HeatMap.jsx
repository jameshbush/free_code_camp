import React from "react";
import { initializeTestRunner } from "../../utils/scripts/injectFCCTests";
import * as d3 from "d3";
import { scaleChromatic, mouse } from "d3";
import "./styles.scss";

const TEMPERATURE_API_ENDPOINT =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json";

class HeatMap extends React.Component {
  async componentDidMount() {
    initializeTestRunner();
    await this.drawChart();
  }
  shouldComponentUpdate = () => false;

  async drawChart() {
    let temperatureData = await fetch(TEMPERATURE_API_ENDPOINT).then((res) => res.json());
    const data = temperatureData.monthlyVariance;
    console.log(
      temperatureData,
      // temperatureData.baseTemperature,
      temperatureData.monthlyVariance[0].year,
      temperatureData.monthlyVariance[0].month,
      temperatureData.monthlyVariance[0].variance
    );

    // set the dimensions and margins of the graph
    var margin = { top: 80, right: 25, bottom: 30, left: 40 };
    var width = 450 - margin.left - margin.right;
    var height = 450 - margin.top - margin.bottom;
    const AXIS_FONT_SIZE = 15;

    // append the svg object to the body of the page
    var svg = d3
      .select("#heat-map-svg")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    console.log(data);

    // Labels of row and columns -> unique identifier of the column called 'group' and 'variable'
    var myGroups = d3.map(data, (d) => d.month).keys();
    var myVars = d3.map(data, (d) => d.year).keys();

    // Build X scales and axis:
    var xScale = d3.scaleBand().range([0, width]).domain(myGroups).padding(0.05);
    svg
      .append("g")
      .style("font-size", AXIS_FONT_SIZE)
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale).tickSize(0))
      .select(".domain")
      .remove();

    // Build Y scales and axis:
    var yScale = d3.scaleBand().range([height, 0]).domain(myVars).padding(0.05);
    svg
      .append("g")
      .style("font-size", AXIS_FONT_SIZE)
      .call(d3.axisLeft(yScale).tickSize(0))
      .select(".domain")
      .remove();

    // Build color scale
    var myColor = d3.scaleSequential().interpolator(d3.interpolateInferno).domain([1, 100]);

    // create a tooltip
    // var tooltip = d3
    //   .select("#heat-map-svg")
    //   .append("div")
    //   .style("opacity", 0)
    //   .attr("class", "tooltip")
    //   .style("background-color", "white")
    //   .style("border", "solid")
    //   .style("border-width", "2px")
    //   .style("border-radius", "5px")
    //   .style("padding", "5px");

    // Three function that change the tooltip when user hover / move / leave a cell
    // var mouseover = function (d) {
    //   tooltip.style("opacity", 1);
    //   d3.select(this).style("stroke", "black").style("opacity", 1);
    // };
    // var mousemove = function (d) {
    //   tooltip.html("The exact value of<br>this cell is: " + d.value);
    //   .style("left", d3.mouse(this)[0] + 70 + "px")
    //   .style("top", d3.mouse(this)[1] + "px");
    // };
    // var mouseleave = function (d) {
    //   tooltip.style("opacity", 0);
    //   d3.select(this).style("stroke", "none").style("opacity", 0.8);
    // };

    const RADIUS = 4;
    // add the squares
    svg
      .selectAll()
      .data(data, (d) => d.year + ":" + d.month)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.year))
      .attr("y", (d) => yScale(d.month))
      .attr("rx", RADIUS)
      .attr("ry", RADIUS)
      .attr("width", xScale.bandwidth())
      .attr("height", yScale.bandwidth())
      .style("fill", (d) => myColor(d.variance))
      .style("stroke-width", RADIUS)
      .style("stroke", "none")
      .style("opacity", 0.8);
    // .on("mouseover", mouseover)
    // .on("mousemove", mousemove)
    // .on("mouseleave", mouseleave);

    // Add title to graph
    svg
      .append("text")
      .attr("x", 0)
      .attr("y", -50)
      .attr("text-anchor", "left")
      .style("font-size", "22px")
      .text("A d3.js Heatmap");

    // Add subtitle to graph
    svg
      .append("text")
      .attr("x", 0)
      .attr("y", -20)
      .attr("text-anchor", "left")
      .style("font-size", "14px")
      .style("fill", "grey")
      .style("max-width", 400)
      .text(`Base temp: ${temperatureData.baseTemperature}`);

    return;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 id="title">Temperature Heat Map</h1>
            <p id="description">
              How much is the earth heating? How does seasonality influence tempuratures? This shows seven
              decades of temperatures.
            </p>
            <svg id="heat-map-svg" ref={(elem) => (this.svg = elem)}></svg>
          </div>
        </div>
      </div>
    );
  }
}

export { HeatMap };
