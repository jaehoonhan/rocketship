import React from "react";
import Plot from "react-plotly.js";

class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXval: [],
      stockChartYval: [],
      sdate: 0,
      edate: 1,
      invested: "",
    };
    this.shandleChange = this.shandleChange.bind(this);
    this.ehandleChange = this.ehandleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    this.fetchstock();
  }
  //This function is used for daily chart, the api only allows for yesterday on the free version.
  yesterday = ( function(){this.setDate(this.getDate()-1); return this} ).call(new Date());
  getlastyear = ( function(){this.setDate(this.getDate()-1); this.setFullYear(this.getFullYear()-1); return this} ).call(new Date());
  fetchstock() {
    const pointerToThis = this;
    console.log(pointerToThis);
    const API_KEY = "R5l9TcJ_bCGQqYQ82Ym3iVKM_39u99eG";
    //let currdate = new Date().toISOString().slice(0, 10);
    let yestdate = this.yesterday.toISOString().slice(0, 10);
    let lastyear = this.getlastyear.toISOString().slice(0, 10);
    let stocksym = "AMC";
    let API_Call = "https://api.polygon.io/v2/aggs/ticker/" + stocksym + "/range/1/day/"+ lastyear + "/" + yestdate + "?unadjusted=false&sort=asc&limit=251&apiKey=" + API_KEY;
    //let API_Call = "https://api.polygon.io/v2/aggs/ticker/" + stocksym + "/range/1/minute/" + yestdate + "/" + yestdate + "?unadjusted=true&sort=asc&limit=675&apiKey=" + API_KEY;
    let stockchartXcalfun = [];
    let stockchartYcalfun = [];


    fetch(API_Call)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {


        for (var key in data["results"]) {
          var s = new Date(data["results"][key]["t"]).toLocaleDateString("fr-CA");
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
  makebuyoption() {
    var count = 0;
    for (var key of this.state.stockChartXval) {
      var node = document.createElement("option"); // Create a <li> node

      node.setAttribute("class", "sdate");
      node.setAttribute("value", count);
      var textnode = document.createTextNode(key); // Create a text node
      node.appendChild(textnode); // Append the text to <li>
      document.getElementById("startdate").appendChild(node); // Append <li> to <ul> with id="myList"
      count++;
    }
  }
  makeselloption() {
    var count = 0;
    for (var key of this.state.stockChartXval) {
      var node = document.createElement("option");
      node.setAttribute("class", "edate"); // Create a <li> node
      node.setAttribute("value", count);
      var textnode = document.createTextNode(key); // Create a text node
      node.appendChild(textnode); // Append the text to <li>
      document.getElementById("enddate").appendChild(node); // Append <li> to <ul> with id="myList"
      count++;
    }
  }

  shandleChange(e) {
    this.setState({ sdate: e.target.value });
    console.log(this.state.sdate);
  }

  ehandleChange(e) {
    this.setState({ edate: e.target.value });
    console.log(this.state.edate);
  }

  profitcal() {

    var sprice = this.state.stockChartYval[this.state.sdate];
    var shares = this.state.invested / sprice;
    var eprice = this.state.stockChartYval[this.state.edate];
    var final = shares * eprice;
  
      if(!final){
        console.log(final);
      }
      else{
        document.getElementById("final").innerText = final;
      }
    
 
    

  }
  handleKeyPress(event) {
    if (event.charCode === 13) {
      this.setState({ invested: event.target.value });
      console.log(this.state.invested);
    }
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
              type : 'date',
              rangeselector: {
                visible : true,
                buttons: [
                  {
                    step: 'month',
                    stepmode: 'backward',
                    count: 1,
                    label: '1m'
                }, {
                  step: 'month',
                  stepmode: 'backward',
                  count: 3,
                  label: '3m'
              }, {
                    step: 'month',
                    stepmode: 'backward',
                    count: 6,
                    label: '6m'
                },{
                    step: 'year',
                    visible : true
                  }
                ]
            },




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
        <div>
        <h2>Gain/Loss Simulator</h2>
          <h3>Enter Buy Date</h3>
          <select
            id="startdate"
            value={this.state.sdate}
            onChange={this.shandleChange}
          >
            {this.makebuyoption()}
          </select>
          <h3>Enter Sell Date</h3>
          <select
            id="enddate"
            value={this.state.edate}
            onChange={this.ehandleChange}
          >
            {this.makeselloption()}
          </select>
          <h3>Money Invested</h3>
          <input
            type="number"
            id="shares"
            name="shares"
            required
            minlength="1"
            placeholder="$"
            onKeyPress={this.handleKeyPress}
          ></input>
          
          <h3 id="final" onChange={this.profitcal()}></h3>
        </div>
      </div>
    );
  }
}
export default Stock;