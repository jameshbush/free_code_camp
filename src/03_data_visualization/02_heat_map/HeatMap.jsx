import React from "react";
import { initializeTestRunner } from "../../utils/scripts/injectFCCTests";
import * as d3 from "d3";
import "./styles.scss";
// /home/b/Documents/free_code_camp/node_modules/@types/d3-selection/index.d.ts

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
    const { monthlyVariance, baseTemperature } = temperatureData;
    console.log(
      baseTemperature,
      monthlyVariance,
      monthlyVariance[0].year,
      monthlyVariance[0].month,
      monthlyVariance[0].variance
    );

    // set the dimensions and margins of the graph
    var margin = { top: 80, right: 25, bottom: 30, left: 65 };
    var width = 1500 - margin.left - margin.right;
    var height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3
      .select("#heat-map-svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // X/Y/C SCALE
    const years = [...new Set(d3.map(monthlyVariance, (d) => d.year))]; // ( 1953 ... 2015 )
    const variances = [...new Set(d3.map(monthlyVariance, (d) => d.variance))]; // ( -6.976 ... 5.228 )
    // console.log(years, variances);

    const MONTH_NAMES = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const SCALE_BAND_PADDING = 0.01;
    var xScale = d3
      .scaleBand()
      .range([0, width])
      .domain(years)
      .paddingInner(SCALE_BAND_PADDING)
      .paddingOuter(SCALE_BAND_PADDING);
    var yScale = d3
      .scaleBand()
      .range([height, 0])
      .domain(MONTH_NAMES.map((_, i) => i).reverse())
      .paddingInner(SCALE_BAND_PADDING)
      .paddingOuter(SCALE_BAND_PADDING);
    var cScale = d3
      .scaleSequential()
      .interpolator(d3.interpolate("lightgreen", "darkred"))
      .domain([d3.min(variances), d3.max(variances)]); // http://using-d3js.com/04_05_sequential_scales.html

    // X/Y AXIS
    const AXIS_FONT_SIZE = 12;
    svg
      .append("g")
      .attr("id", "x-axis")
      .style("font-size", AXIS_FONT_SIZE)
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale).tickSize(0))
      .selectAll("text")
      .attr("opacity", (year) => (Number.isInteger(year / 10) ? 1 : 0));

    svg
      .append("g")
      .attr("id", "y-axis")
      .style("font-size", AXIS_FONT_SIZE)
      .call(d3.axisLeft(yScale).tickSize(0))
      .selectAll("text")
      .text((monthIndex) => MONTH_NAMES[monthIndex]);

    // Legend
    const LEGEND_WIDTH = 10;
    const LEGEND_DATA = [d3.min(variances), d3.mean(variances), 0, d3.max(variances)];
    svg
      .append("rect")
      .attr("x", 240)
      .attr("y", -36)
      .attr("height", 28)
      .attr("width", 233)
      .attr("id", "legend");
      // .attr("background", "blue")
      // .attr("fill", "blue");

    svg
      .selectAll("legend-rect")
      .append("rect")
      .data(LEGEND_DATA)
      .enter()
      .append("rect")
      .attr("fill", (d) => cScale(d))
      .attr("x", (_, i) => 250 + i * (LEGEND_WIDTH + 50))
      .attr("y", -28)
      .attr("height", LEGEND_WIDTH)
      .attr("width", LEGEND_WIDTH);

    svg
      .selectAll("legend-text")
      .data(LEGEND_DATA)
      .enter()
      .append("text")
      .text((d) => d.toFixed(2))
      .attr("x", (_, i) => 265 + i * (LEGEND_WIDTH + 50))
      .attr("y", -20)
      .style("font-size", 12)
      .attr("class", "bacon");

    // Tooltip
    var tooltip = d3
      .select("#heat-map-wrapper")
      .append("div")
      .attr("id", "tooltip")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background", "#EEE")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px");

    // Cells
    const RADIUS = 0;
    const JS_MONTH_OFFSET = -1;
    svg
      .selectAll()
      .data(monthlyVariance)
      .enter()
      .append("rect")
      .attr("class", "rectangle cell")
      .attr("data-month", (d) => d.month + JS_MONTH_OFFSET)
      .attr("data-year", (d) => d.year)
      .attr("data-temp", (d) => d.variance)
      .attr("x", (d) => xScale(d.year))
      .attr("y", (d) => yScale(d.month + JS_MONTH_OFFSET))
      .attr("rx", RADIUS)
      .attr("ry", RADIUS)
      .attr("width", xScale.bandwidth())
      .attr("height", yScale.bandwidth())
      .style("fill", (d) => cScale(d.variance))
      .style("stroke-width", RADIUS)
      .style("stroke", "none")
      .style("opacity", 0.8)
      .on("mouseover", function (_) {
        tooltip.style("opacity", 1);
        d3.select(this).style("stroke", "black").style("opacity", 1);
      })
      .on("mousemove", (event, data) => {
        // console.log(event, data);
        const [x, y] = d3.pointer(event);
        // console.log(x, y);
        tooltip
          .html(`The exact value of<br>this cell is: ${data.variance}`)
          .style("left", `${x + 80}px`)
          .style("top", `${y + 160}px`)
          .attr("data-year", data.year)
          .attr("data-month", data.month);
      })
      .on("mouseleave", function (d) {
        tooltip.style("opacity", 0);
        d3.select(this).style("stroke", "none").style("opacity", 0.8);
      });

    // TITLE
    svg
      .append("text")
      .attr("x", 0)
      .attr("y", -50)
      .attr("text-anchor", "left")
      .style("font-size", "22px")
      .text("A d3.js Heatmap");

    // SUBTITLE
    svg
      .append("text")
      .attr("x", 0)
      .attr("y", -20)
      .attr("text-anchor", "left")
      .style("font-size", "14px")
      .style("fill", "grey")
      .style("max-width", 400)
      .text(`Base temp: ${baseTemperature} ℃ = 0.00`);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 id="title">Temperature Heat Map</h1>
            <p id="description">
              How much is the earth heating? How does seasonality influence tempuratures? This shows two and a
              half centuries of monthly world temperatures.
            </p>
            <div id="heat-map-wrapper">
              <svg id="heat-map-svg" ref={(elem) => (this.svg = elem)}></svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { HeatMap };
