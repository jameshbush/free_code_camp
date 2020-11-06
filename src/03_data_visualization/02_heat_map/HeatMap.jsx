import React from "react";
import { initializeTestRunner, cleanUpTestRunner } from "../../utils/scripts/injectFCCTests";
import * as d3 from "d3";
import "./styles.scss";

const TEMPERATURE_API_ENDPOINT =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json";

class HeatMap extends React.Component {
  async componentDidMount() {
    initializeTestRunner();
    await this.drawChart();
  }
  componentWillUnmount = () => cleanUpTestRunner();
  shouldComponentUpdate = () => false;

  async drawChart() {
    let temperatureData = await fetch(TEMPERATURE_API_ENDPOINT).then((res) => res.json());
    const { monthlyVariance, baseTemperature } = temperatureData;

    var margin = { top: 80, right: 25, bottom: 30, left: 65 };
    var width = 1500 - margin.left - margin.right;
    var height = 400 - margin.top - margin.bottom;

    var svg = d3
      .select("#heat-map-svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // X/Y/C SCALE
    const years = [...new Set(d3.map(monthlyVariance, (d) => d.year))]; // ( 1753 ... 2015 )
    const variances = [...new Set(d3.map(monthlyVariance, (d) => d.variance))]; // ( -6.976 ... 5.228 )

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
      .domain([d3.min(variances), d3.max(variances)]);

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
    const LEGEND_DATA = [-6, -3, 0, 3, 6];

    const legend = svg.append("g").attr("id", "legend").attr("transform", `translate(240, -36)`);

    legend
      .append("rect")
      .attr("id", "legend-outline-rect")
      .attr("height", 25)
      .attr("width", LEGEND_DATA.length * 55 + 50);

    legend
      .selectAll()
      .data(LEGEND_DATA)
      .enter()
      .append("rect")
      .attr("fill", (d) => cScale(d))
      .attr("height", LEGEND_WIDTH)
      .attr("width", LEGEND_WIDTH)
      .attr("class", "legend-rect")
      .attr("transform", (_, i) => `translate(${20 + i * 60}, 8)`);
    legend
      .selectAll("text")
      .data(LEGEND_DATA)
      .enter()
      .append("text")
      .text((d) => d.toFixed(2))
      .style("font-size", 12)
      .attr("class", "legend-text")
      .attr("transform", (_, i) => `translate(${35 + i * 60}, 16.5)`);

    // Tooltip
    var tooltip = d3
      .select("#heat-map-wrapper")
      .append("div")
      .attr("id", "tooltip")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background", "#EEE")
      .style("border", "solid")
      .style("font-family", "monospace")
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
      .on("mouseover", function () {
        tooltip.style("opacity", 1);
        d3.select(this).style("stroke", "black").style("opacity", 0.9);
        const [x, y] = [this.x.baseVal.value, this.y.baseVal.value];
        const { year, month, temp } = this.dataset;

        tooltip
          .html(`Variance: ${Number(temp) >= 0 ? "+" : ""}${Number(temp).toFixed(2)} °C`)
          .style("left", `${x + margin.left + 50}px`)
          .style("top", `${y * 0.75 + margin.top + 200}px`)
          .attr("data-year", year)
          .attr("data-month", month);
      })
      .on("mouseleave", function () {
        tooltip.style("opacity", 0);
        d3.select(this).style("stroke", "none").style("opacity", 1);
      });

    // TITLE
    svg
      .append("text")
      .attr("x", 0)
      .attr("y", -50)
      .attr("text-anchor", "left")
      .style("font-size", "22px")
      .text("Heatmap of monthly temperature variation");

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
              This chart shows 261.75 years of monthly world temperatures. Variance from the base temp (8.66
              ℃) has decreased over time with a trend towards warmer temperatures. (the chart is best viewed
              on a large screen where scrolling is not required)
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
