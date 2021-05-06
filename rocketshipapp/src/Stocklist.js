import React, { Component } from "react";

class Stocklist extends Component {

  constructor(props) {
    super(props)
    this.state = {
      stock: [],
      price: [],
      percent: [],
    }
  }

  componentDidMount() {
    this.fetchquote();

  }
  fetchquote() {
    const qpointerToThis = this;
    console.log(qpointerToThis)
    const qAPI_KEY = 'I63OAH7A35O2X4A4';
    let qsymbol = 'PLTR';
    let qAPI_Call = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=' + qsymbol + '&apikey=' + qAPI_KEY;
    let stockquote = [];
    let stockprice = [];


    fetch(qAPI_Call)

      .then(
        function (response) {
          return response.json();

        }
      )
      .then(
        function (datas) {
          console.log(datas);

          stockquote.push(datas['Global Quote']['10. change percent']);
          stockprice.push(datas['Global Quote']['05. price']);
        qpointerToThis.setState({
          stock:qsymbol,
          price:stockprice,
          percent:stockquote,
          datas
        });
      }
      )
      
      
       

        
      }

    
  // renderTableBody = () => {
  //   return ( qsymbol , stockprice, stockquote => {
  //     return (
  //       <tr>
  //         <td> {this.state.stock} </td>
  //         <td> {this.state.price} </td>
  //         <td> {this.state.percent} </td>
  //       </tr>
  //     )
  //   })
  // }
  

  render() {
    return (
     <table>
       <thead>
         <tr>
          <th>Stock</th>
          <th>Price</th>
          <th>% Change</th>
         </tr>
       </thead>
       <tbody>
         {/* {this.renderTableBody} */}
       <tr>
          <td> {this.state.stock} </td>
          <td> {this.state.price} </td>
          <td> {this.state.percent} </td>
        </tr>
        
       </tbody>
     </table>
    )
  }
}




export default Stocklist;
