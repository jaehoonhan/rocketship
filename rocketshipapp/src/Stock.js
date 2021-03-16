import React from "react";
import Plot from 'react-plotly.js';

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

  fetchstock() {
    const pointerToThis = this;
    console.log(pointerToThis)
      const API_KEY = 'xPz4AilYj9x8joMVCsgBwjtZhpYvEmzr';
      let stocksym = 'AAPL';
      let API_Call = 'https://api.polygon.io/v2/aggs/ticker/'+ stocksym + '/range/1/minute/2020-10-14/2021-03-10?unadjusted=true&sort=asc&limit=50&apiKey=' + API_KEY;
      let stockchartXcalfun = [];
      let stockchartYcalfun = [];
      


      fetch(API_Call)
      
          .then(
              function(response) {
                  return response.json();
              }
          )
          .then(
              function(data){
                  console.log(data);

                  for (var key in data['results']){
                    stockchartXcalfun.push(key);
                    stockchartYcalfun.push(data['results']
                    [key]['o']);
                  
                  }

                  //console.log(stockchartXcalfun)
                  pointerToThis.setState({
                    stockChartXval: stockchartXcalfun,
                    stockChartYval : stockchartYcalfun
                  });
              }
          )

      
  }
  render() {
    return (
      <div>
        <h1>Stock Market</h1>
        <Plot
        data={[
          {
            x: this.state.stockChartXval,
            y: this.state.stockChartYval,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
        ]}
        layout={{width: 720, height: 440, title: 'AAPL'}}
      />
      </div>
    )
  }
}
export default Stock;
