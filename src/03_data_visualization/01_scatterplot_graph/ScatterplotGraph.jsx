import React from "react";
import { initializeTestRunner, cleanUpTestRunner } from "../../utils/scripts/injectFCCTests";
import * as d3 from "d3";
import "./styles.scss";

const CYCLIST_API_ENDPOINT =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json";
const PADDING = 40;

function OrdinalSuffixOf(i) {
  var j = i % 10,
    k = i % 100;
  if (j === 1 && k !== 11) {
    return i + "st";
  }
  if (j === 2 && k !== 12) {
    return i + "nd";
  }
  if (j === 3 && k !== 13) {
    return i + "rd";
  }
  return i + "th";
}

class ScatterplotGraph extends React.Component {
  async componentDidMount() {
    initializeTestRunner();
    await this.drawChart();
  }
  componentWillUnmount = () => cleanUpTestRunner();
  shouldComponentUpdate = () => false;

  async drawChart() {
    let data = await fetch(CYCLIST_API_ENDPOINT).then((res) => res.json());
    // const { Time, Place, Seconds, Name, Year, Nationality, Doping, URL } = data[0];
    // console.log(data.map(({ Year }) => Year).sort());

    const width = 680;
    const height = 680;
    const padding = 45;

    const svg = d3.select("#scatterplot-graph-svg").attr("width", width).attr("height", height);

    // Scale
    const xScale = d3
      .scaleTime()
      .domain([d3.min(data, ({ Year }) => new Date([Year])), d3.max(data, ({ Year }) => new Date([Year]))])
      // .nice()
      .range([padding, width - padding]);

    const yScale = d3
      .scaleLinear()
      .domain([d3.min(data, ({ Seconds }) => Seconds), d3.max(data, ({ Seconds }) => Seconds)])
      .nice()
      .range([height - padding, padding]);

    // Axis
    svg
      .append("g")
      .attr("id", "x-axis")
      .attr("transform", `translate(0, ${height - padding})`)
      .call(d3.axisBottom(xScale));
    svg
      .append("g")
      .attr("id", "y-axis")
      .attr("transform", `translate(${padding}, 0)`)
      .call(
        d3.axisLeft(yScale).tickFormat((d) => {
          var seconds = d % 60;
          if (seconds < 9) seconds = `0${d % 60}`;
          return `${Math.floor(d / 60)}:${seconds}`;
        })
      );

    // Tooltip
    var tooltip = svg
      .append("text")
      .attr("id", "tooltip")
      .attr("x", PADDING + 15)
      .attr("y", PADDING / 2);

    var tooltipExtended = svg
      .append("text")
      .attr("id", "tooltip-extended")
      .attr("x", PADDING + 15)
      .attr("y", PADDING / 2 + 15);

    // Dots
    svg
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", ({ Nationality }) => `dot ${Nationality?.toLowerCase()}`)
      .attr("r", 10)

      .attr("cx", ({ Year }) => xScale(new Date([Year])))
      .attr("cy", ({ Seconds }) => yScale(Seconds))

      .attr("data-xvalue", ({ Year }) => new Date([Year]))
      .attr("data-yvalue", ({ Seconds }) => new Date(0, 0, 0, 0, 0, Seconds))

      .on("mouseover", () => [tooltip, tooltipExtended].forEach((el) => el.style("opacity", 0.66)))
      .on("mouseleave", () => [tooltip, tooltipExtended].forEach((el) => el.style("opacity", 0)))
      .on("mousemove", (_event, { Time, Place, Name, Year, Nationality, Doping, URL }) => {
        console.log(URL);
        tooltip
          .text(`In ${Year}, ${Name} (${Nationality}) finished ${OrdinalSuffixOf(Place)} in ${Time}`)
          .attr("data-year", new Date([Year]));
        tooltipExtended.text(`${Doping} *`);
      });

    // Legend
    // https://www.d3-graph-gallery.com/graph/custom_legend.html
    const nations = [...new Set(data.map(({ Nationality }) => Nationality))];
    svg
      .append("rect")
      .attr("id", "legend")
      .attr("x", height - padding - 111)
      .attr("y", width - padding - 305)
      .attr("height", 300)
      .attr("width", 100);

    svg
      .selectAll("mydots")
      .data(nations)
      .enter()
      .append("circle")
      .attr("class", (d) => d.toLowerCase())
      .attr("r", 10)
      .attr("cx", 550)
      .attr("cy", (d, i, g) => padding + 40 + g.length * 25 + 25 * i);

    svg
      .selectAll("mylabels")
      .data(nations)
      .enter()
      .append("text")
      .attr("class", (d) => d.toLowerCase())
      .attr("r", 10)
      .text((d) => d)
      .attr("font-type", "mono")
      .attr("x", 565)
      .attr("y", (_, i, g) => padding + 45 + g.length * 25 + 25 * i);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 id="title">Bike Race Times</h1>
            <svg id="scatterplot-graph-svg" ref={(elem) => (this.svg = elem)}></svg>
          </div>
        </div>
      </div>
    );
  }
}

export { ScatterplotGraph };
