import React, { useState, useEffect } from "react";
let stockquote = [];
let stockprice = [];
let finalsym = [];
const fetchmovers = () => {
  let stocksym = [];
  const qAPI_KEY = "I63OAH7A35O2X4A4";

  const qpointerToThis = this;

  var jdata = [];
  fetch(
    "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-movers?region=US&lang=en-US&count=10&start=0",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e944056751msh53b3c0438c0814bp16f2a9jsna09412002786",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      },
    }
  )
    .then((Response) => Response.json())
    .then((datas) => {
      // console.log(datas);
      for (var key in datas.finance.result[0].quotes) {
        stocksym.push(datas.finance.result[0].quotes[key].symbol);
      }
      stocksym = stocksym.slice(0, 2);
      console.log(stocksym);
      for (var key2 of stocksym) {
        let qAPI_Call =
          "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" +
          key2 +
          "&apikey=" +
          qAPI_KEY;
        //console.log(key2);

        fetch(qAPI_Call)
          .then(function (Response) {
            return Response.json();
          })
          .then((datas2) => {
            console.log(datas2);

            stockquote.push(datas2["Global Quote"]["10. change percent"]);
            stockprice.push(datas2["Global Quote"]["05. price"]);
            finalsym.push(datas2["Global Quote"]["01. symbol"]);

            return {
              stock: finalsym,
              price: stockprice,
              percent: stockquote,
            };
          });
        //console.log(qAPI_Call);
      }
      // jdata = JSON.parse(datas2);
      // console.log(jdata);
    });
};
const Maketable = () => {
  var table = document.createElement("table"),
    thead = document.createElement("thead"),
    tbody = document.createElement("tbody"),
    th,
    tr,
    td;
  var table = document.createElement("table"),
    thead = document.createElement("thead"),
    tbody = document.createElement("tbody"),
    th,
    tr,
    td;
  th = document.createElement("th"); 
  th.innerHTML = "Stock";
  table.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Price";
  table.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "% Change";
  table.appendChild(th);
  table.appendChild(thead);
  table.appendChild(tbody);

  document.body.appendChild(table);
  for (var i = 0; i <= 2; i++) {
    tr = document.createElement("tr");
      //for stockname
    td = document.createElement("td");
    td.innerHTML = this.state.stock;
    tr.appendChild(td);

    //for price
    td = document.createElement("td");
    td.innerHTML = this.state.price;
    tr.appendChild(td);

    //for chnage
    td = document.createElement("td");
    td.innerHTML = this.state.percent;
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
};
const Topmovers = () => {
  //   const [stock, setStock] = useState([]);
  useEffect(() => {
    console.log("hello world");
    fetchmovers();
    console.log(stockquote);
    console.log(stockprice);
    console.log(finalsym);
    console.log("goodbye");
  });
    return (
        <div>
        </div>
    );
};

export default Topmovers;
