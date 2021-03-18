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
      let stocksym = 'TSLA';
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
                    stockChartYval : stockchartYcalfun,
                    stockname : stocksym
                  });
              }
          )

      
  }
  render() {
    return (
      <div>

        <Plot
        
        data={[
          {
            x: this.state.stockChartXval,
            y: this.state.stockChartYval,
            type: 'scatter',
            mode: 'lines',
            marker: {color: 'white'},
            
          },
        ]}
        layout={{width: 720, height: 440, title: this.state.stockname, font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#FFFFFF'
        },
          paper_bgcolor: 'rgba(0,0,0,0', 
          plot_bgcolor: "rgba(0,0,0,0",
          xaxis: { showgrid: false , zeroline: false, visible: false},
          yaxis: {showgrid : false , zeroline: false, visible: false, showline: true}
        }  }
        
      />
      </div>
    )
  }
}
export default Stock;
