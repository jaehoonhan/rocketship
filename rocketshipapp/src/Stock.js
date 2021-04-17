import React from "react";
import Plot from "react-plotly.js";

class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXval: [],
      stockChartYval: [],
    };
  }

  componentDidMount() {
    this.fetchstock();
  }
  //This function is used for daily chart, the api only allows for yesterday on the free version.
  yesterday = ( function(){this.setDate(this.getDate()-1); return this} ).call(new Date());

  fetchstock() {
    const pointerToThis = this;
    console.log(pointerToThis);
    const API_KEY = "xPz4AilYj9x8joMVCsgBwjtZhpYvEmzr";
    //let currdate = new Date().toISOString().slice(0, 10);
    let yestdate = this.yesterday.toISOString().slice(0, 10);
    let stocksym = "TSLA";
    //let API_Call = "https://api.polygon.io/v2/aggs/ticker/" + stocksym + "/range/1/day/2020-10-14/" + yestdate + "?unadjusted=true&sort=asc&limit=120&apiKey=" + API_KEY;
    let API_Call = "https://api.polygon.io/v2/aggs/ticker/" + stocksym + "/range/1/minute/" + yestdate + "/" + yestdate + "?unadjusted=true&sort=asc&limit=675&apiKey=" + API_KEY;
    let stockchartXcalfun = [];
    let stockchartYcalfun = [];
    //TSLA.LON&apikey=demo
    //API_KEY: I63OAH7A35O2X4A4

    fetch(API_Call) 
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        for (var key in data["results"]) {
          var s = new Date(data["results"][key]["t"]).toLocaleTimeString("en-US")
          stockchartXcalfun.push(s);
          stockchartYcalfun.push(data["results"][key]["vw"]);
        }

        //console.log(stockchartXcalfun)
        pointerToThis.setState({
          stockChartXval: stockchartXcalfun,
          stockChartYval: stockchartYcalfun,
          stockname: stocksym,
        });
      });
  }
  render() {
    return (
      <div>
        <Plot
          data={[
            {
              x: this.state.stockChartXval,
              y: this.state.stockChartYval,
              type: "scatter",
              mode: "lines",
              marker: { color: "white" },
            },
          ]}
          layout={{
            width: 720,
            height: 440,
            title: this.state.stockname,
            font: {
              family: "Courier New, monospace",
              size: 18,
              color: "#FFFFFF",
            },
            paper_bgcolor: "rgba(0,0,0,0",
            plot_bgcolor: "rgba(0,0,0,0",
            xaxis: {
              showgrid: false,
              zeroline: false,
              visible: false,
              fixedrange: true,
            },
            yaxis: {
              showgrid: false,
              zeroline: false,
              visible: false,
              showline: true,
              fixedrange: true,
            },
          }}
          config={{ displayModeBar: false, scrollZoom: false }}
        />
      </div>
    );
  }
}
export default Stock;
